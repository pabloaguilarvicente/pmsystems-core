import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrimeNG } from 'primeng/config';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LayoutService, MenuMode } from '../service/layout.service';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButtonModule, DrawerModule, RadioButtonModule],
  template: `
    <button
      *ngIf="simple"
      class="layout-config-button config-link"
      type="button"
      (click)="toggleConfigSidebar()"
    >
      <i class="pi pi-cog"></i>
    </button>

    <p-drawer
      [(visible)]="visible"
      (onHide)="layoutService.hideConfigSidebar()"
      position="right"
      [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
      styleClass="layout-config-sidebar w-80"
      header="Settings"
    >
      <div class="flex flex-col gap-4">
        <!-- Color Scheme Section -->
        <div class="flex flex-col gap-2">
          <span class="text-lg font-semibold">Color Scheme</span>
          <p-selectbutton
            [(ngModel)]="darkTheme"
            [options]="themeOptions"
            optionLabel="name"
            optionValue="value"
            [allowEmpty]="false"
          ></p-selectbutton>
        </div>

        <ng-container *ngIf="!simple">
          <!-- Menu Type Section -->
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">Menu Type</span>
            <div class="flex flex-wrap flex-col gap-3">
              <div class="flex">
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="static"
                    [(ngModel)]="menuMode"
                  ></p-radio-button>
                  <label for="static">Static</label>
                </div>

                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="overlay"
                    [(ngModel)]="menuMode"
                  ></p-radio-button>
                  <label for="overlay">Overlay</label>
                </div>
              </div>
              <div class="flex">
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="slim"
                    [(ngModel)]="menuMode"
                  ></p-radio-button>
                  <label for="slim">Slim</label>
                </div>
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="slim-plus"
                    [(ngModel)]="menuMode"
                    inputId="slim-plus"
                  ></p-radio-button>
                  <label for="slim-plus">Slim+</label>
                </div>
              </div>
              <div class="flex">
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="reveal"
                    [(ngModel)]="menuMode"
                  ></p-radio-button>
                  <label for="reveal">Reveal</label>
                </div>
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="drawer"
                    [(ngModel)]="menuMode"
                    inputId="drawer"
                  ></p-radio-button>
                  <label for="drawer">Drawer</label>
                </div>
              </div>
              <div class="flex">
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuMode"
                    value="horizontal"
                    [(ngModel)]="menuMode"
                  ></p-radio-button>
                  <label for="horizontal">Horizontal</label>
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Profile Section -->
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">Menu Profile</span>
            <div class="flex flex-wrap flex-col gap-3">
              <div class="flex">
                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuProfilePosition"
                    value="start"
                    [(ngModel)]="menuProfilePosition"
                  ></p-radio-button>
                  <label for="start">Start</label>
                </div>

                <div class="flex items-center gap-2 w-1/2">
                  <p-radio-button
                    name="menuProfilePosition"
                    value="end"
                    [(ngModel)]="menuProfilePosition"
                  ></p-radio-button>
                  <label for="end">End</label>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </p-drawer>
  `,
})
export class AppConfigurator {
  @Input({ transform: booleanAttribute }) simple: boolean = false;

  router = inject(Router);
  config: PrimeNG = inject(PrimeNG);
  layoutService: LayoutService = inject(LayoutService);
  primeng = inject(PrimeNG);

  themeOptions = [
    { name: 'Light', value: false },
    { name: 'Dark', value: true },
  ];

  get menuMode() {
    return this.layoutService.layoutConfig().menuMode;
  }

  set menuMode(val: MenuMode) {
    this.layoutService.layoutConfig.update((config) => ({
      ...config,
      menuMode: val,
    }));
  }

  get menuProfilePosition() {
    return this.layoutService.layoutConfig().menuProfilePosition;
  }

  set menuProfilePosition(val: string) {
    this.layoutService.layoutConfig.update((config) => ({
      ...config,
      menuProfilePosition: val,
    }));
  }

  get darkTheme(): boolean {
    return this.layoutService.layoutConfig().darkTheme;
  }

  set darkTheme(_val: boolean) {
    this.layoutService.layoutConfig.update((config) => ({
      ...config,
      menuTheme: _val ? 'dark' : 'light',
      topbarTheme: _val ? 'dark' : 'light',
      darkTheme: _val,
    }));
  }

  get visible() {
    return this.layoutService.layoutState().configSidebarVisible;
  }

  set visible(val: boolean) {
    this.layoutService.layoutState.update((state) => ({
      ...state,
      configSidebarVisible: val,
    }));
  }

  toggleConfigSidebar() {
    this.layoutService.layoutState.update((val) => ({
      ...val,
      configSidebarVisible: !val.configSidebarVisible,
    }));
  }
}
