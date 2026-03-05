import { Component } from '@angular/core';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { ApexChartConfig, AppChart } from '../../../../core/components/app-chart/app-chart';

@Component({
  selector: 'analytics-realtime',
  imports: [AppTitlePage, AppChart],
  templateUrl: './analytics-realtime.html',
})
export class AnalyticsRealtime {
  // Online users last 30 min (area)
  public readonly onlineUsersConfig: ApexChartConfig = {
    xaxisCategories: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30'],
    strokeCurve: 'monotoneCubic',
    toolbar: false,
  };

  public readonly onlineUsersSeries = [{ name: 'Online Users', data: [340, 378, 412, 389, 450, 470, 461] }];


  public readonly eventsPerSecondConfig: ApexChartConfig = {
    xaxisCategories: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
    toolbar: false,
    strokeCurve: 'straight',
  };

  public readonly eventsPerSecondSeries = [
    { name: 'Clicks', data: [12, 18, 14, 22, 19, 25, 21] },
    { name: 'Page Views', data: [45, 52, 48, 60, 55, 67, 63] },
    { name: 'Errors', data: [1, 0, 2, 1, 3, 0, 1] },
  ];


  public readonly latencyByRegionConfig: ApexChartConfig = {
    xaxisCategories: ['US-East', 'US-West', 'EU', 'APAC', 'LATAM'],
    yaxisFormatter: (v) => v + 'ms',
  };

  public readonly latencyByRegionSeries = [{ name: 'Avg Latency', data: [42, 58, 71, 134, 95] }];
}
