import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/components/app.layout';

export const appRoutes: Routes = [
  {
    path: 'analytics',
    component: AppLayout,
    loadChildren: () => import('./modules/analytics/analytics.routes'),
  },
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
  { path: '**', redirectTo: 'analytics' },
];
