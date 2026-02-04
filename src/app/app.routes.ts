import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/components/app.layout';
import { ErrorPage } from './core/components/error-page';
import { errorGuard } from './core/guards/error.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./modules/analytics/analytics.routes').then((m) => m.default),
      },
      {
        path: 'users',
        data: { breadcrumb: 'user.plural.label' },
        loadChildren: () => import('./modules/users/users.routes').then((m) => m.default),
      },
      {
        path: 'error',
        component: ErrorPage,
        canActivate: [errorGuard],
      },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'analytics' },
];
