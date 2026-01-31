import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { Ripple } from 'primeng/ripple';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { BadgeModule } from 'primeng/badge';

import { LayoutService } from '../service/layout.service';
import { Notifications } from './app.notifications';
import { Tools } from './app.tools';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: '[app-topbar]',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    FormsModule,
    Ripple,
    InputText,
    ButtonModule,
    MegaMenuModule,
    BadgeModule,
    Notifications,
    Tools,
    TooltipModule,
    TranslateModule,
  ],
  template: `
    <div class="layout-topbar-start">
      <a class="layout-topbar-logo" routerLink="/">
        <div class="layout-topbar-logo-full flex items-center gap-2">
          <img
            src="images/logos/{{ layoutService.isDarkTheme() ? 'WHITE01.svg' : 'BLUE01.svg' }}"
            alt="logo"
            width="50"
          />
          <span class="font-black whitespace-nowrap">PM SYSTEMS</span>
        </div>

        <div class="layout-topbar-logo-slim">
          <img
            src="images/logos/{{ layoutService.isDarkTheme() ? 'WHITE01.svg' : 'BLUE01.svg' }}"
            alt="logo"
            width="50"
          />
        </div>
      </a>
      <a
        #menuButton
        class="layout-menu-button"
        (click)="onMenuButtonClick()"
        [pTooltip]="
          ('actions.hide' | translate) +
          '/' +
          ('actions.show' | translate) +
          ' ' +
          ('menu.label' | translate)
        "
        tooltipPosition="bottom"
        showDelay="300"
        [pTooltipPT]="{
          arrow: { style: { display: 'none' } },
        }"
      >
        <i class="pi pi-bars"></i>
      </a>

      <button class="app-config-mobile-button"></button>

      <a #mobileMenuButton class="layout-topbar-mobile-button" (click)="onTopbarMenuToggle()">
        <i class="pi pi-ellipsis-v font-extrabold!"></i>
      </a>
    </div>

    <div class="layout-topbar-end">
      <div class="layout-topbar-actions-start"></div>
      <div class="layout-topbar-actions-end">
        <ul class="layout-topbar-items">
          <li>
            <a
              (click)="toggleFullScreen()"
              [pTooltip]="
                (isFullScreen ? 'screen.exit' : 'screen.full') | translate
              "
              tooltipPosition="bottom"
              showDelay="300"
            >
              <i [class]="isFullScreen ? 'pi pi-window-minimize' : 'pi pi-window-maximize'"></i>
            </a>
          </li>
          <li class="layout-topbar-search">
            <a
              pStyleClass="@next"
              enterFromClass="!hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="!hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
              (click)="focusSearchInput()"
              [pTooltip]="'actions.search' | translate"
              tooltipPosition="bottom"
              showDelay="300"
            >
              <i class="pi pi-search"></i>
            </a>

            <div class="layout-search-panel !hidden p-input-filled">
              <i class="pi pi-search"></i>
              <input
                #searchInput
                type="text"
                pInputText
                [placeholder]="'actions.search' | translate"
              />
              <button
                pButton
                pRipple
                type="button"
                icon="pi pi-times"
                rounded
                text
                pStyleClass=".layout-search-panel"
                leaveToClass="!hidden"
                leaveActiveClass="animate-fadeout"
              ></button>
            </div>
          </li>
          <li>
            <a
              pStyleClass="@next"
              enterFromClass="hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
              [pTooltip]="'notifications.label' | translate"
              tooltipPosition="bottom"
              showDelay="300"
            >
              <i class="pi pi-bell !align-middle"></i>
            </a>
            <div class="hidden">
              <notifications />
            </div>
          </li>
          <li>
            <a
              pStyleClass="@next"
              enterFromClass="hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
              [pTooltip]="'tools.label' | translate"
              tooltipPosition="bottom"
              showDelay="300"
            >
              <i class="pi pi-table"></i>
            </a>
            <div class="hidden">
              <tools />
            </div>
          </li>
          <li>
            <a
              (click)="toggleConfigSidebar()"
              [pTooltip]="'settings.preferences' | translate"
              tooltipPosition="bottom"
              showDelay="300"
            >
              <i class="pi pi-sliders-h"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
  host: {
    class: 'layout-topbar',
  },
  styles: `
    :host ::ng-deep .p-overlaybadge .p-badge {
      outline-width: 0px;
    }
  `,
})
export class AppTopbar {
  public readonly layoutService = inject(LayoutService);
  private cdr = inject(ChangeDetectorRef);
  public isFullScreen = false;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  @ViewChild('menuButton') menuButton!: ElementRef<HTMLButtonElement>;

  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef<HTMLButtonElement>;

  ngOnInit() {
    document.addEventListener('fullscreenchange', () => {
      this.isFullScreen = !!document.fullscreenElement;
      this.cdr.detectChanges();
    });
  }

  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

  onRightMenuButtonClick() {
    this.layoutService.openRightMenu();
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

  focusSearchInput() {
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 150);
  }

  onTopbarMenuToggle() {
    this.layoutService.layoutState.update((val) => ({
      ...val,
      topbarMenuActive: !val.topbarMenuActive,
    }));
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
