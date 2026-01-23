import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from '../../services/localstorage.service';
import { AppSettings, Language, MenuMode, MenuProfileMode } from '../../commons/core.model';
import { LOCAL_STORAGE_KEYS } from '../../commons/core.constants';
import { TranslateService } from '@ngx-translate/core';

export interface layoutConfig {
  primary: string;
  surface: string | undefined | null;
  darkTheme: boolean;
  menuMode: MenuMode;
  menuTheme: string;
  topbarTheme: string;
  menuProfilePosition: string;
  language: Language;
}

export interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
  rightMenuActive: boolean;
  topbarMenuActive: boolean;
  sidebarActive: boolean;
  activeMenuItem: any;
  overlaySubmenuActive: boolean;
  anchored: boolean;
  menuProfileActive: boolean;
}

export interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
}

export interface TabCloseEvent {
  tab: MenuItem;
  index: number;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private localStorageService = inject(LocalStorageService);
  private translate = inject(TranslateService);

  _config: layoutConfig = {
    primary: 'primary',
    surface: null,
    darkTheme: false,
    menuMode: 'static',
    menuTheme: 'light',
    topbarTheme: 'light',
    menuProfilePosition: 'end',
    language: 'es',
  };

  _state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    rightMenuActive: false,
    topbarMenuActive: false,
    sidebarActive: false,
    anchored: false,
    activeMenuItem: null,
    overlaySubmenuActive: false,
    menuProfileActive: false,
  };

  layoutConfig = signal<layoutConfig>(this._config);

  layoutState = signal<LayoutState>(this._state);

  private configUpdate = new Subject<layoutConfig>();

  private overlayOpen = new Subject<any>();

  private menuSource = new Subject<MenuChangeEvent>();

  private resetSource = new Subject();

  private languageChange = new Subject<Language>();

  menuSource$ = this.menuSource.asObservable();

  resetSource$ = this.resetSource.asObservable();

  configUpdate$ = this.configUpdate.asObservable();

  overlayOpen$ = this.overlayOpen.asObservable();

  languageChange$ = this.languageChange.asObservable();

  isSidebarActive: Signal<boolean> = computed(
    () => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive,
  );

  isDarkTheme: Signal<boolean> = computed(() => this.layoutConfig().darkTheme);

  isOverlay: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'overlay');

  isSlim: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'slim');

  isSlimPlus: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'slim-plus');

  isHorizontal: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'horizontal');

  currentLanguage: Signal<Language> = computed(() => this.layoutConfig().language);

  transitionComplete: WritableSignal<boolean> = signal<boolean>(false);

  isSidebarStateChanged = computed(() => {
    const layoutConfig = this.layoutConfig();
    return (
      layoutConfig.menuMode === 'horizontal' ||
      layoutConfig.menuMode === 'slim' ||
      layoutConfig.menuMode === 'slim-plus'
    );
  });

  private initialized = false;

  constructor() {
    // Cargar configuración desde localStorage
    this.loadConfigFromStorage();

    effect(() => {
      const config = this.layoutConfig();
      if (config) {
        this.onConfigUpdate();
        // Guardar en localStorage cada vez que cambia la configuración
        this.saveConfigToStorage();
      }
    });

    effect(() => {
      const config = this.layoutConfig();

      if (!this.initialized || !config) {
        this.initialized = true;
        return;
      }

      this.handleDarkModeTransition(config);
    });

    effect(() => {
      this.isSidebarStateChanged() && this.reset();
    });
  }

  private loadConfigFromStorage(): void {
    const savedSettings = this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings);

    if (savedSettings) {
      const language = savedSettings.language || 'es';

      this.layoutConfig.update((config) => ({
        ...config,
        darkTheme: savedSettings.colorScheme === 'dark',
        menuMode: savedSettings.menuMode,
        menuTheme: savedSettings.colorScheme === 'dark' ? 'dark' : 'light',
        topbarTheme: savedSettings.colorScheme === 'dark' ? 'dark' : 'light',
        menuProfilePosition: savedSettings.menuProfileMode,
        language: language,
      }));

      this.translate.use(language);
      this.toggleDarkMode();
    }
  }

  private saveConfigToStorage(): void {
    const config = this.layoutConfig();
    const themeSettings: AppSettings = {
      colorScheme: config.darkTheme ? 'dark' : 'light',
      menuMode: config.menuMode,
      menuProfileMode: config.menuProfilePosition as MenuProfileMode,
      language: config.language,
    };

    this.localStorageService.set(LOCAL_STORAGE_KEYS.appSettings, themeSettings);
  }

  private handleDarkModeTransition(config: layoutConfig): void {
    if ((document as any).startViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }

  private startViewTransition(config: layoutConfig): void {
    const transition = (document as any).startViewTransition(() => {
      this.toggleDarkMode(config);
    });

    transition.ready
      .then(() => {
        this.onTransitionEnd();
      })
      .catch(() => {});
  }

  toggleDarkMode(config?: layoutConfig): void {
    const _config = config || this.layoutConfig();
    if (_config.darkTheme) {
      document.documentElement.classList.add('app-dark');
    } else {
      document.documentElement.classList.remove('app-dark');
    }
  }

  changeLanguage(language: Language): void {
    this.layoutConfig.update((config) => ({
      ...config,
      language,
    }));
    this.languageChange.next(language);
    this.translate.use(language);
  }

  private onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => {
      this.transitionComplete.set(false);
    });
  }

  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update((prev) => ({
        ...prev,
        overlayMenuActive: !this.layoutState().overlayMenuActive,
      }));

      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update((prev) => ({
        ...prev,
        staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive,
      }));
    } else {
      this.layoutState.update((prev) => ({
        ...prev,
        staticMenuMobileActive: !this.layoutState().staticMenuMobileActive,
      }));

      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  onMenuProfileToggle() {
    this.layoutState.update((prev) => ({ ...prev, menuProfileActive: !prev.menuProfileActive }));
  }

  openRightMenu() {
    this.layoutState.update((prev) => ({ ...prev, rightMenuActive: true }));
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  onConfigUpdate() {
    this._config = { ...this.layoutConfig() };
    this.configUpdate.next(this.layoutConfig());
  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }

  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }

  hideConfigSidebar() {
    this.layoutState.update((prev) => ({ ...prev, configSidebarVisible: false }));
  }
}
