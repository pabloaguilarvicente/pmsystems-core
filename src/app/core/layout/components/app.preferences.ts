import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Language, LayoutService, MenuMode, MenuProfilePosition } from '../service/layout.service';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    DrawerModule,
    RadioButtonModule,
    TranslateModule,
  ],
  template: `
    <p-drawer
      [(visible)]="visible"
      (onHide)="layoutService.hideConfigSidebar()"
      position="right"
      styleClass="w-80"
      [header]="'settings.preferences' | translate"
    >
      <div class="flex flex-col gap-6">
        <!-- Language Section -->
        <div class="flex flex-col gap-3">
          <span class="font-semibold text-sm">{{ 'language.label' | translate }}</span>
          <div class="grid grid-cols-2 gap-4">
            <!-- Spanish -->
            <div class="flex cursor-pointer flex-col" (click)="changeLanguage('es')">
              <div
                class="flex h-20 items-center justify-center overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  currentLanguage === 'es'
                    ? 'border-primary border-3'
                    : 'border-surface-200 dark:border-surface-700'
                "
              >
                <img src="images/flags/PE.png" alt="" width="30" />
              </div>
              <div
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                [class.text-primary]="currentLanguage === 'es'"
              >
                {{ 'language.spanish' | translate }}
              </div>
            </div>

            <!-- English -->
            <div class="flex cursor-pointer flex-col" (click)="changeLanguage('en')">
              <div
                class="flex h-20 items-center justify-center overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  currentLanguage === 'en'
                    ? 'border-primary border-3'
                    : 'border-surface-200 dark:border-surface-700'
                "
              >
                <img src="images/flags/US.png" alt="" width="30" />
              </div>
              <div
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                [class.text-primary]="currentLanguage === 'en'"
              >
                {{ 'language.english' | translate }}
              </div>
            </div>
          </div>
        </div>

        <!-- Color Scheme Section -->
        <div class="flex flex-col gap-3">
          <span class="font-semibold text-sm">{{ 'theme.label' | translate }}</span>
          <div class="grid grid-cols-2 gap-4">
            <!-- Light Theme -->
            <div class="flex cursor-pointer flex-col" (click)="darkTheme = false">
              <div
                class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  !darkTheme
                    ? 'border-primary border-3'
                    : 'border-surface-200 dark:border-surface-700'
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
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                [class.text-primary]="!darkTheme"
              >
                {{ 'theme.light' | translate }}
              </div>
            </div>

            <!-- Dark Theme -->
            <div class="flex cursor-pointer flex-col" (click)="darkTheme = true">
              <div
                class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
                [ngClass]="
                  darkTheme
                    ? 'border-primary border-3'
                    : 'border-surface-200 dark:border-surface-700'
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
                class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                [class.text-primary]="darkTheme"
              >
                {{ 'theme.dark' | translate }}
              </div>
            </div>
          </div>
        </div>

        @if (!simple) {
          <!-- Menu Type Section -->
          <div class="flex flex-col gap-3">
            <span class="font-semibold text-sm">{{ 'menu.type' | translate }}</span>
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
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'static'"
                >
                  {{ 'menu.static' | translate }}
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
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="flex h-full items-center justify-between px-1.5">
                        <div class="h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"></div>
                        <div class="flex gap-0.5">
                          <div
                            class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                          ></div>
                          <div
                            class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'overlay'"
                >
                  {{ 'menu.overlay' | translate }}
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
                    <div class="mx-1 mt-3 space-y-1">
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
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'slim'"
                >
                  {{ 'menu.slim' | translate }}
                </div>
              </div>

              <!-- Slim+ -->
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
                    <div class="mx-1 mt-2 space-y-1">
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                      <div class="h-1 rounded-sm bg-surface-300 dark:bg-surface-600"></div>
                    </div>
                  </div>
                  <div class="w-8 bg-surface-50 dark:bg-surface-900">
                    <div class="mx-1 mt-2 space-y-0.5">
                      <div class="h-0.5 rounded-sm bg-surface-200 dark:bg-surface-700"></div>
                      <div class="h-0.5 rounded-sm bg-surface-200 dark:bg-surface-700"></div>
                      <div class="h-0.5 rounded-sm bg-surface-200 dark:bg-surface-700"></div>
                      <div class="h-0.5 rounded-sm bg-surface-200 dark:bg-surface-700"></div>
                    </div>
                  </div>
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="mr-1.5 flex h-full items-center justify-end">
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                        <div
                          class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'slim-plus'"
                >
                  {{ 'menu.slim_plus' | translate }}
                </div>
              </div>

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
                  <div
                    class="flex flex-auto flex-col border-l border-surface-200 dark:border-surface-700"
                  >
                    <div class="h-3 bg-surface-100 dark:bg-surface-800">
                      <div class="flex h-full items-center justify-between px-1.5">
                        <div class="h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"></div>
                        <div class="flex gap-0.5">
                          <div
                            class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                          ></div>
                          <div
                            class="ml-1 h-1 w-1 rounded-full bg-surface-400 dark:bg-surface-600"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex flex-auto border-t border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900"
                    ></div>
                  </div>
                </div>
                <div
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'drawer'"
                >
                  {{ 'menu.drawer' | translate }}
                </div>
              </div>

              <!-- Horizontal -->
              <div class="flex cursor-pointer flex-col" (click)="menuMode = 'horizontal'">
                <div
                  class="flex h-20 overflow-hidden rounded-md border-2 transition-all hover:opacity-80"
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
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuMode === 'horizontal'"
                >
                  {{ 'menu.horizontal' | translate }}
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Profile Section -->
          <div class="flex flex-col gap-3">
            <span class="font-semibold text-sm">{{ 'profile.position' | translate }}</span>
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
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuProfilePosition === 'start'"
                >
                  {{ 'time.start' | translate }}
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
                  class="text-surface-600 dark:text-surface-400 mt-2 text-center text-sm font-thin"
                  [class.text-primary]="menuProfilePosition === 'end'"
                >
                  {{ 'time.end' | translate }}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </p-drawer>
  `,
})
export class AppPreferences {
  @Input({ transform: booleanAttribute }) simple: boolean = false;

  private readonly config: PrimeNG = inject(PrimeNG);
  public readonly layoutService: LayoutService = inject(LayoutService);
  private readonly primeng = inject(PrimeNG);

  get currentLanguage(): Language {
    return this.layoutService.currentLanguage();
  }

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

  set menuProfilePosition(val: MenuProfilePosition) {
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

  changeLanguage(language: Language) {
    this.layoutService.changeLanguage(language);
  }
}
