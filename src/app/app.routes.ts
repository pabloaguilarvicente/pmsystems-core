import { Routes } from '@angular/router';
import { AppLayout } from './core/layout/components/app.layout';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: AppLayout,
    loadChildren: () => import('./modules/dashboard/dashboard.routes'),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
