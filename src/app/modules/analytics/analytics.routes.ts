import { Route } from '@angular/router';
import { AnalyticsOverview } from './pages/analytics-overview/analytics-overview';
import { AnalyticsReports } from './pages/analytics-reports/analytics-reports';
import { AnalyticsRealtime } from './pages/analytics-realtime/analytics-realtime';

export default [
  { path: 'overview', component: AnalyticsOverview, data: { breadcrumb: 'layout.overview' } },
  { path: 'reports', component: AnalyticsReports, data: { breadcrumb: 'layout.reports' } },
  { path: 'realtime', component: AnalyticsRealtime, data: { breadcrumb: 'layout.realtime' } },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
] satisfies Route[];
