import { Route } from '@angular/router';
import { DashboardMain } from './pages/dashboard-main/dashboard-main';

export default [
  { path: '', component: DashboardMain, data: { breadcrumb: 'layout.general' } },
] satisfies Route[];
