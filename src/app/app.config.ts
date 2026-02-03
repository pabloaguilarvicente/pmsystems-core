import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PROVIDE_INTERCEPTORS } from './core/providers/interceptors.provider';
import { PROVIDE_ROUTER } from './core/providers/router.provider';
import { PROVIDE_PRIMENG } from './core/providers/primeng.provider';
import { PROVIDE_TRANSLATE } from './core/providers/translate.provider';
import { PROVIDE_LOCALE } from './core/providers/locale.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(), PROVIDE_INTERCEPTORS),
    provideAnimationsAsync(),
    PROVIDE_ROUTER,
    PROVIDE_PRIMENG,
    PROVIDE_TRANSLATE,
    PROVIDE_LOCALE,
  ],
};
