import { Component } from '@angular/core';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { ApexChartConfig, AppChart } from '../../../../core/components/app-chart/app-chart';

@Component({
  selector: 'analytics-overview',
  imports: [AppTitlePage, AppChart],
  templateUrl: './analytics-overview.html',
})
export class AnalyticsOverview {
  public readonly revenueConfig: ApexChartConfig = {
    xaxisCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    yaxisFormatter: (v) => '$' + v,
    toolbar: false,
  };

  public readonly revenueSeries = [
    { name: 'Revenue', data: [30, 45, 57, 40, 65, 80, 72] },
    { name: 'Costs', data: [20, 35, 42, 30, 50, 60, 55] },
  ];

  public readonly activeUsersConfig: ApexChartConfig = {
    xaxisCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    strokeCurve: 'monotoneCubic',
    toolbar: false,
  };

  public readonly activeUsersSeries = [{ name: 'Active Users', data: [120, 145, 132, 180, 162, 210] }];

  public readonly deviceDistributionConfig: ApexChartConfig = {
    overrides: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
    },
  };

  public readonly deviceDistributionSeries = [58, 34, 8];
}
