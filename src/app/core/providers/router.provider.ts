import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from '../../app.routes';

export const PROVIDE_ROUTER = provideRouter(
  appRoutes,
  withComponentInputBinding(),
  withViewTransitions(),
  withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }),
  withEnabledBlockingInitialNavigation(),
);
