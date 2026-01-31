import { Component, computed, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { AppMenu } from './app.menu';
import { CommonModule } from '@angular/common';
import { AppMenuProfile } from './app.menuprofile';
import { LayoutService } from '../service/layout.service';
import { Button } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: '[app-sidebar]',
  standalone: true,
  imports: [AppMenuProfile, AppMenu, CommonModule, Button, TooltipModule, TranslateModule],
  template: `<div
    class="layout-sidebar"
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
  >
    <div class="layout-sidebar-top">
      <a href="/">
        <div class="layout-sidebar-logo">
          <img src="images/logos/BLUE01.svg" alt="logo" width="50" />
          <span class="font-black whitespace-nowrap">PM SYSTEMS</span>
        </div>

        <div class="layout-sidebar-logo-slim">
          <img src="images/logos/BLUE01.svg" alt="logo" width="50" />
        </div>
      </a>
      <p-button
        [icon]="anchored() ? 'ph-fill ph-push-pin-simple' : 'ph ph-push-pin-simple'"
        (onClick)="anchor()"
        [text]="true"
        [rounded]="true"
        [pTooltip]="anchored() ? ('actions.unpin' | translate) : ('actions.pin' | translate)"
        class="layout-sidebar-anchor"
        size="small"
        tooltipPosition="right"
      />
    </div>
    @if (menuProfilePosition() === 'start') {
      <div app-menu-profile #menuProfileStart></div>
    }
    <div #menuContainer class="layout-menu-container">
      <div app-menu></div>
    </div>
    @if (menuProfilePosition() === 'end') {
      <div app-menu-profile #menuProfileEnd></div>
    }
  </div>`,
})
export class AppSidebar implements OnDestroy {
  el = inject(ElementRef);

  layoutService = inject(LayoutService);

  @ViewChild(AppMenu) appMenu!: AppMenu;

  @ViewChild('menuProfileStart') menuProfileStart!: AppMenuProfile;

  @ViewChild('menuProfileEnd') menuProfileEnd!: AppMenuProfile;

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  overlayMenuActive = computed(() => this.layoutService.layoutState().overlayMenuActive);

  menuProfilePosition = computed(() => this.layoutService.layoutConfig().menuProfilePosition);

  anchored = computed(() => this.layoutService.layoutState().anchored);

  timeout: any;

  resetOverlay() {
    if (this.overlayMenuActive()) {
      this.layoutService.layoutState.update((val) => ({ ...val, overlayMenuActive: false }));
    }
  }

  onMouseEnter() {
    if (!this.anchored()) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutService.layoutState.update((val) => ({ ...val, sidebarActive: true }));
    }
  }

  onMouseLeave() {
    if (!this.anchored()) {
      if (!this.timeout) {
        this.timeout = setTimeout(
          () => this.layoutService.layoutState.update((val) => ({ ...val, sidebarActive: false })),
          300,
        );
      }
    }
  }

  anchor() {
    this.layoutService.layoutState.update((val) => ({ ...val, anchored: !val.anchored }));
  }

  ngOnDestroy() {
    this.resetOverlay();
  }
}
