import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PRIMENG_PROVIDERS } from './core/providers/primeng.provider';
import { TRANSLATE_PROVIDERS } from './core/providers/translate.provider';
import { ROUTER_PROVIDERS } from './core/providers/router.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    ROUTER_PROVIDERS,
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    PRIMENG_PROVIDERS,
    TRANSLATE_PROVIDERS,
  ],
};
