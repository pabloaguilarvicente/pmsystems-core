import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
  DestroyRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from '../../services/localstorage.service';
import { AppSettings, Language, MenuMode, MenuProfilePosition } from '../../commons/core.model';
import { LOCAL_STORAGE_KEYS } from '../../commons/core.constants';
import { TranslateService } from '@ngx-translate/core';

export interface LayoutConfig {
  primary: string;
  surface: string | null;
  darkTheme: boolean;
  menuMode: MenuMode;
  menuTheme: 'light' | 'dark';
  topbarTheme: 'light' | 'dark';
  menuProfilePosition: MenuProfilePosition;
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
  activeMenuItem: MenuItem | null;
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
  private readonly localStorageService = inject(LocalStorageService);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  // Default configuration
  private readonly DEFAULT_CONFIG: LayoutConfig = {
    primary: 'primary',
    surface: null,
    darkTheme: false,
    menuMode: 'static',
    menuTheme: 'light',
    topbarTheme: 'light',
    menuProfilePosition: 'end',
    language: 'es',
  };

  private readonly DEFAULT_STATE: LayoutState = {
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

  // Signals
  layoutConfig = signal<LayoutConfig>(this.DEFAULT_CONFIG);
  layoutState = signal<LayoutState>(this.DEFAULT_STATE);
  transitionComplete = signal<boolean>(false);

  // Subjects
  private readonly configUpdate = new Subject<LayoutConfig>();
  private readonly overlayOpen = new Subject<void>();
  private readonly menuSource = new Subject<MenuChangeEvent>();
  private readonly resetSource = new Subject<void>();
  private readonly languageChange = new Subject<Language>();

  // Observables
  readonly menuSource$ = this.menuSource.asObservable();
  readonly resetSource$ = this.resetSource.asObservable();
  readonly configUpdate$ = this.configUpdate.asObservable();
  readonly overlayOpen$ = this.overlayOpen.asObservable();
  readonly languageChange$ = this.languageChange.asObservable();

  // Computed signals
  readonly isSidebarActive: Signal<boolean> = computed(
    () => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive,
  );

  readonly isDarkTheme: Signal<boolean> = computed(() => this.layoutConfig().darkTheme);

  readonly isOverlay: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'overlay');

  readonly isSlim: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'slim');

  readonly isSlimPlus: Signal<boolean> = computed(
    () => this.layoutConfig().menuMode === 'slim-plus',
  );

  readonly isHorizontal: Signal<boolean> = computed(
    () => this.layoutConfig().menuMode === 'horizontal',
  );

  readonly isStatic: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'static');

  readonly currentLanguage: Signal<Language> = computed(() => this.layoutConfig().language);

  readonly isCompactMenuMode = computed(() => {
    const mode = this.layoutConfig().menuMode;
    return mode === 'horizontal' || mode === 'slim' || mode === 'slim-plus';
  });

  private initialized = false;
  private lastSavedConfig: string | null = null;

  constructor() {
    this.loadConfigFromStorage();
    this.setupEffects();
    this.setupCleanup();
    this.setupDebouncedSave();
  }

  private setupEffects(): void {
    // Effect para cambios de configuración
    effect(() => {
      const config = this.layoutConfig();

      if (!config) return;

      // Notificar cambios
      this.configUpdate.next(config);

      // Manejar transición de tema oscuro si ya fue inicializado
      if (this.initialized) {
        this.handleDarkModeTransition(config);
      }

      this.initialized = true;
    });

    // Effect para reset cuando cambia el modo de menú
    effect(() => {
      if (this.isCompactMenuMode()) {
        this.reset();
      }
    });
  }

  private setupCleanup(): void {
    this.destroyRef.onDestroy(() => {
      this.configUpdate.complete();
      this.overlayOpen.complete();
      this.menuSource.complete();
      this.resetSource.complete();
      this.languageChange.complete();
    });
  }

  private setupDebouncedSave(): void {
    // Guardar configuración con debounce para evitar escrituras excesivas
    this.configUpdate$.pipe(debounceTime(300)).subscribe(() => this.saveConfigToStorage());
  }

  private loadConfigFromStorage(): void {
    const savedSettings = this.localStorageService.get<AppSettings>(LOCAL_STORAGE_KEYS.appSettings);

    if (!savedSettings) {
      this.toggleDarkMode();
      return;
    }

    const isDark = savedSettings.colorScheme === 'dark';
    const language = savedSettings.language || 'es';

    this.layoutConfig.set({
      ...this.DEFAULT_CONFIG,
      darkTheme: isDark,
      menuMode: savedSettings.menuMode,
      menuTheme: isDark ? 'dark' : 'light',
      topbarTheme: isDark ? 'dark' : 'light',
      menuProfilePosition: savedSettings.menuProfileMode,
      language,
    });

    this.translate.use(language);
    this.toggleDarkMode();
  }

  private saveConfigToStorage(): void {
    const config = this.layoutConfig();
    const themeSettings: AppSettings = {
      colorScheme: config.darkTheme ? 'dark' : 'light',
      menuMode: config.menuMode,
      menuProfileMode: config.menuProfilePosition,
      language: config.language,
    };

    const currentConfigStr = JSON.stringify(themeSettings);

    // Solo guardar si la configuración cambió
    if (this.lastSavedConfig !== currentConfigStr) {
      this.localStorageService.set(LOCAL_STORAGE_KEYS.appSettings, themeSettings);
      this.lastSavedConfig = currentConfigStr;
    }
  }

  private handleDarkModeTransition(config: LayoutConfig): void {
    if ((document as any).startViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }

  private startViewTransition(config: LayoutConfig): void {
    const transition = (document as any).startViewTransition(() => {
      this.toggleDarkMode(config);
    });

    transition.ready
      .then(() => this.onTransitionEnd())
      .catch(() => {
        // Silenciar errores de transición
      });
  }

  private toggleDarkMode(config?: LayoutConfig): void {
    const _config = config ?? this.layoutConfig();

    if (_config.darkTheme) {
      document.documentElement.classList.add('app-dark');
    } else {
      document.documentElement.classList.remove('app-dark');
    }
  }

  private onTransitionEnd(): void {
    this.transitionComplete.set(true);
    setTimeout(() => {
      this.transitionComplete.set(false);
    }, 0);
  }

  // Public API
  changeLanguage(language: Language): void {
    this.layoutConfig.update((config) => ({
      ...config,
      language,
    }));

    this.languageChange.next(language);
    this.translate.use(language);
  }

  onMenuToggle(): void {
    if (this.isOverlay()) {
      this.layoutState.update((prev) => ({
        ...prev,
        overlayMenuActive: !prev.overlayMenuActive,
      }));

      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next();
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update((prev) => ({
        ...prev,
        staticMenuDesktopInactive: !prev.staticMenuDesktopInactive,
      }));
    } else {
      this.layoutState.update((prev) => ({
        ...prev,
        staticMenuMobileActive: !prev.staticMenuMobileActive,
      }));

      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next();
      }
    }
  }

  onMenuProfileToggle(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      menuProfileActive: !prev.menuProfileActive,
    }));
  }

  openRightMenu(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      rightMenuActive: true,
    }));
  }

  closeRightMenu(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      rightMenuActive: false,
    }));
  }

  isDesktop(): boolean {
    return window.innerWidth > 991;
  }

  isMobile(): boolean {
    return !this.isDesktop();
  }

  onMenuStateChange(event: MenuChangeEvent): void {
    this.menuSource.next(event);
  }

  reset(): void {
    this.resetSource.next();
  }

  onOverlaySubmenuOpen(): void {
    this.overlayOpen.next();
  }

  showConfigSidebar(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      configSidebarVisible: true,
    }));
  }

  hideConfigSidebar(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      configSidebarVisible: false,
    }));
  }

  toggleConfigSidebar(): void {
    this.layoutState.update((prev) => ({
      ...prev,
      configSidebarVisible: !prev.configSidebarVisible,
    }));
  }

  updateConfig(config: Partial<LayoutConfig>): void {
    this.layoutConfig.update((current) => ({
      ...current,
      ...config,
    }));
  }
}
