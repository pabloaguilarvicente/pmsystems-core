import { Component } from '@angular/core';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { ApexChartConfig, AppChart } from '../../../../core/components/app-chart/app-chart';

@Component({
  selector: 'analytics-reports',
  imports: [AppTitlePage, AppChart],
  templateUrl: './analytics-reports.html',
})
export class AnalyticsReports {
  public readonly annualRevenueConfig: ApexChartConfig = {
    xaxisCategories: ['Q1', 'Q2', 'Q3', 'Q4'],
    yaxisFormatter: (v) => '$' + v + 'k',
    stacked: false,
    dataLabels: false,
  };

  public readonly annualRevenueSeries = [
    { name: '2023', data: [120, 145, 138, 160] },
    { name: '2024', data: [148, 172, 165, 198] },
  ];

  public readonly conversionFunnelConfig: ApexChartConfig = {
    xaxisCategories: ['Visits', 'Sign-ups', 'Activated', 'Paid', 'Recurring'],
    yaxisFormatter: (v) => v + 'k',
  };

  public readonly conversionFunnelSeries = [{ name: 'Users', data: [980, 540, 310, 180, 95] }];

  public readonly revenueByCategoryConfig: ApexChartConfig = {
    overrides: {
      labels: ['SaaS', 'Licenses', 'Services', 'Support'],
    },
  };

  public readonly revenueByCategorySeries = [62, 18, 12, 8];
}
