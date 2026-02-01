import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/components/app.layout';

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
        loadChildren: () => import('./modules/users/users.routes').then((m) => m.default),
      },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'analytics' },
];
