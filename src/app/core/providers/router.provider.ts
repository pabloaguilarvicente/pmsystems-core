import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from '../../app.routes';

export const ROUTER_PROVIDERS = provideRouter(
  appRoutes,
  withViewTransitions(),
  withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }),
  withEnabledBlockingInitialNavigation(),
);
