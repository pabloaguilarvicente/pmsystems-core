import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from '../service/layout.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: '[app-menu-profile]',
  standalone: true,
  imports: [CommonModule, TooltipModule, ButtonModule, RouterModule, TranslateModule],
  template: `<button
      class="cursor-pointer flex items-center"
      (click)="toggleMenu($event)"
      pTooltip="Profile"
      [tooltipDisabled]="isTooltipDisabled()"
    >
      <img src="images/user.png" alt="avatar" width="25" class="rounded-sm" />
      <span class="text-start">
        <strong>Pablo Aguilar</strong>
        <small>Software Developer</small>
      </span>
      <i
        class="layout-menu-profile-toggler ph-thin"
        [ngClass]="{
          'ph-caret-down':
            (!menuProfileActive() && (menuProfilePosition() === 'start' || isHorizontal())) ||
            (menuProfileActive() && menuProfilePosition() === 'end' && !isHorizontal()),
          'ph-caret-up':
            (menuProfileActive() && (menuProfilePosition() === 'start' || isHorizontal())) ||
            (!menuProfileActive() && menuProfilePosition() === 'end' && !isHorizontal()),
        }"
      ></i>
    </button>

    @if (menuProfileActive()) {
      <ul [@menu]="isHorizontal() ? 'overlay' : 'inline'">
        <li [pTooltip]="'preferences.label' | translate" [tooltipDisabled]="isTooltipDisabled()">
          <button class="cursor-pointer" (click)="toggleConfigSidebar()">
            <i class="ph-thin ph-faders"></i>
            <span>{{ 'preferences.label' | translate }}</span>
          </button>
        </li>

        <li [pTooltip]="'profile.label' | translate" [tooltipDisabled]="isTooltipDisabled()">
          <button class="cursor-pointer">
            <i class="ph-thin ph-user-rectangle"></i>
            <span>{{ 'profile.label' | translate }}</span>
          </button>
        </li>

        <li [pTooltip]="'auth.logout' | translate" [tooltipDisabled]="isTooltipDisabled()">
          <button class="cursor-pointer">
            <i class="ph-thin ph-power"></i>
            <span>{{ 'auth.logout' | translate }}</span>
          </button>
        </li>
      </ul>
    } `,
  animations: [
    trigger('menu', [
      transition('void => inline', [
        style({ height: 0 }),
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 1, height: '*' })),
      ]),
      transition('inline => void', [
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 0, height: '0' })),
      ]),
      transition('void => overlay', [
        style({ opacity: 0, transform: 'scaleY(0.8)' }),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)'),
      ]),
      transition('overlay => void', [animate('.1s linear', style({ opacity: 0 }))]),
    ]),
  ],
  host: {
    class: 'layout-menu-profile',
  },
})
export class AppMenuProfile implements OnDestroy {
  layoutService = inject(LayoutService);

  renderer = inject(Renderer2);

  el = inject(ElementRef);

  isHorizontal = computed(
    () => this.layoutService.isHorizontal() && this.layoutService.isDesktop(),
  );

  menuProfileActive = computed(() => this.layoutService.layoutState().menuProfileActive);

  menuProfilePosition = computed(() => this.layoutService.layoutConfig().menuProfilePosition);

  isTooltipDisabled = computed(() => !this.layoutService.isSlim());

  subscription!: Subscription;

  outsideClickListener: any;

  constructor() {
    this.subscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (this.isHorizontal() && this.menuProfileActive()) {
        this.layoutService.layoutState.update((value) => ({ ...value, menuProfileActive: false }));
      }
    });

    effect(() => {
      if (this.isHorizontal() && this.menuProfileActive() && !this.outsideClickListener) {
        this.bindOutsideClickListener();
      }

      if (!this.menuProfileActive() && this.isHorizontal()) {
        this.unbindOutsideClickListener();
      }
    });
  }

  bindOutsideClickListener() {
    if (this.isHorizontal()) {
      this.outsideClickListener = this.renderer.listen(document, 'click', (event: MouseEvent) => {
        if (this.menuProfileActive()) {
          const isOutsideClicked = !(
            this.el.nativeElement.isSameNode(event.target) ||
            this.el.nativeElement.contains(event.target)
          );
          if (isOutsideClicked) {
            this.layoutService.layoutState.update((value) => ({
              ...value,
              menuProfileActive: false,
            }));
          }
        }
      });
    }
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.unbindOutsideClickListener();
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.layoutService.onMenuProfileToggle();
  }

  toggleConfigSidebar() {
    let layoutState = this.layoutService.layoutState();

    if (this.layoutService.isSidebarActive()) {
      layoutState.overlayMenuActive = false;
      layoutState.overlaySubmenuActive = false;
      layoutState.staticMenuMobileActive = false;
      layoutState.menuHoverActive = false;
      layoutState.configSidebarVisible = false;
    }
    layoutState.configSidebarVisible = !layoutState.configSidebarVisible;
    this.layoutService.layoutState.set({ ...layoutState });
  }
}
