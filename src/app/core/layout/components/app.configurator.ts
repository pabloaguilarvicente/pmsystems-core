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
      header="Preferencias"
    >
      <div class="flex flex-col gap-6">
        <!-- Color Scheme Section -->
        <div class="flex flex-col gap-3">
          <span class="text-lg font-semibold">Esquema de Color</span>
          <div class="grid grid-cols-2 gap-4">
            <!-- Light Theme -->
            <div class="flex cursor-pointer flex-col" (click)="darkTheme = false">
              <div
                class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  !darkTheme ? 'border-primary border-3' : 'border-surface-200 dark:border-surface-700'
                "
              >
                <div class="flex flex-auto flex-col bg-white">
                  <div class="h-3 bg-gray-100 border-b border-gray-200">
                    <div class="mr-1.5 flex h-full items-center justify-end">
                      <div class="ml-1 h-1 w-1 rounded-full bg-gray-400"></div>
                      <div class="ml-1 h-1 w-1 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto bg-gray-50 p-2">
                    <div class="w-full space-y-1">
                      <div class="h-1 w-3/4 rounded-sm bg-gray-300"></div>
                      <div class="h-1 w-full rounded-sm bg-gray-200"></div>
                      <div class="h-1 w-2/3 rounded-sm bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                [class.text-primary]="!darkTheme"
              >
                Claro
              </div>
            </div>

            <!-- Dark Theme -->
            <div class="flex cursor-pointer flex-col" (click)="darkTheme = true">
              <div
                class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  darkTheme ? 'border-primary border-3' : 'border-surface-200 dark:border-surface-700'
                "
              >
                <div class="flex flex-auto flex-col bg-gray-900">
                  <div class="h-3 bg-gray-800 border-b border-gray-700">
                    <div class="mr-1.5 flex h-full items-center justify-end">
                      <div class="ml-1 h-1 w-1 rounded-full bg-gray-500"></div>
                      <div class="ml-1 h-1 w-1 rounded-full bg-gray-500"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto bg-gray-950 p-2">
                    <div class="w-full space-y-1">
                      <div class="h-1 w-3/4 rounded-sm bg-gray-600"></div>
                      <div class="h-1 w-full rounded-sm bg-gray-700"></div>
                      <div class="h-1 w-2/3 rounded-sm bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                [class.text-primary]="darkTheme"
              >
                Oscuro
              </div>
            </div>
          </div>
        </div>

        <ng-container *ngIf="!simple">
          <!-- Menu Type Section -->
          <div class="flex flex-col gap-3">
            <span class="text-lg font-semibold">Tipo de Menú</span>
            <div class="grid grid-cols-2 gap-4">
              <!-- Static -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'static'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'static'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="w-8 bg-surface-100 dark:bg-surface-800">
                    <div class="mx-1.5 mt-3 space-y-1">
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'static'"
                >
                  Estático
                </div>
              </div>

              <!-- Overlay -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'overlay'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'overlay'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="relative flex flex-auto flex-col">
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="ml-1.5 flex h-full items-center">
                        <div class="h-1 w-2 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      </div>
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                    <div
                      class="absolute left-0 top-3 h-[calc(100%-0.75rem)] w-8 bg-surface-100 opacity-80 dark:bg-surface-800"
                    >
                      <div class="mx-1.5 mt-2 space-y-1">
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'overlay'"
                >
                  Superpuesto
                </div>
              </div>

              <!-- Slim -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'slim'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'slim'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="w-5 bg-surface-100 dark:bg-surface-800">
                    <div class="mx-1 mt-3 space-y-1.5">
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'slim'"
                >
                  Delgado
                </div>
              </div>

              <!-- Slim Plus -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'slim-plus'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'slim-plus'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="w-5 bg-surface-100 dark:bg-surface-800">
                    <div class="mx-1 mt-3 space-y-1.5">
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div
                    class="w-6 border-l border-surface-200 bg-surface-50 dark:border-surface-700 dark:bg-surface-850"
                  >
                    <div class="mx-1 mt-3 space-y-1">
                      <div class="h-0.5 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-0.5 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'slim-plus'"
                >
                  Delgado+
                </div>
              </div>

              <!-- Reveal -->
              <!-- <div class="flex cursor-pointer flex-col" (click)="menuMode = 'reveal'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'reveal'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="relative flex flex-auto flex-col">
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="ml-1.5 flex h-full items-center">
                        <div class="h-1 w-2 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      </div>
                    </div>
                    <div
                      class="relative flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    >
                      <div
                        class="absolute left-0 top-0 h-full w-8 bg-surface-100 dark:bg-surface-800"
                      >
                        <div class="mx-1.5 mt-2 space-y-1">
                          <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                          <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                          <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                        </div>
                      </div>
                      <div class="ml-4 flex-auto bg-surface-0 dark:bg-surface-900"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'reveal'"
                >
                  Revelar
                </div>
              </div> -->

              <!-- Drawer -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'drawer'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'drawer'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="relative flex flex-auto flex-col">
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="ml-1.5 flex h-full items-center">
                        <div class="h-1 w-2 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      </div>
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-300 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                    <div
                      class="absolute left-0 top-3 h-[calc(100%-0.75rem)] w-7 bg-surface-100 shadow-lg dark:bg-surface-800"
                    >
                      <div class="mx-1.5 mt-2 space-y-1">
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                        <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      </div>
                      <div
                        class="absolute right-0.5 top-0.5 h-1 w-1 rounded-full bg-primary opacity-70"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'drawer'"
                >
                  Cajón
                </div>
              </div>

              <!-- Horizontal -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'horizontal'">
                <div
                  class="flex h-20 flex-col overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuMode === 'horizontal'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div
                    class="h-5 border-b border-surface-200 bg-surface-100 dark:border-surface-700 dark:bg-surface-800"
                  >
                    <div class="ml-1.5 flex h-full items-center gap-1">
                      <div class="h-1 w-3 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-3 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 w-3 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto bg-surface-0 dark:bg-surface-900"></div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuMode === 'horizontal'"
                >
                  Horizontal
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Profile Section -->
          <div class="flex flex-col gap-3">
            <span class="text-lg font-semibold">Perfil del Menú</span>
            <div class="grid grid-cols-2 gap-4">
              <!-- Start -->
              <div class="flex cursor-pointer flex-col" (click)="menuProfilePosition = 'start'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuProfilePosition === 'start'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="w-8 bg-surface-100 dark:bg-surface-800">
                    <div
                      class="mx-1.5 mt-2 mb-2 pb-2 border-b border-surface-200 dark:border-surface-700"
                    >
                      <div
                        class="h-3 w-3 mx-auto rounded-full bg-surface-300 dark:bg-surface-600"
                      ></div>
                    </div>
                    <div class="mx-1.5 space-y-1">
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800"></div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuProfilePosition === 'start'"
                >
                  Inicio
                </div>
              </div>

              <!-- End -->
              <div class="flex cursor-pointer flex-col" (click)="menuProfilePosition = 'end'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                  [ngClass]="
                    menuProfilePosition === 'end'
                      ? 'border-primary border-3'
                      : 'border-surface-200 dark:border-surface-700'
                  "
                >
                  <div class="w-8 bg-surface-100 dark:bg-surface-800">
                    <div class="mx-1.5 mt-2 space-y-1 flex-auto">
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                    <div
                      class="mx-1.5 mt-6 pt-2 border-t border-surface-200 dark:border-surface-700"
                    >
                      <div
                        class="h-3 w-3 mx-auto rounded-full bg-surface-300 dark:bg-surface-600"
                      ></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800"></div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-medium"
                  [class.text-primary]="menuProfilePosition === 'end'"
                >
                  Final
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
    { name: 'Claro', value: false },
    { name: 'Oscuro', value: true },
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
