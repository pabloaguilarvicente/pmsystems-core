import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  viewChild,
  afterNextRender,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PRESET_COLORS } from '../../helpers/constant.helper';
import { AppMessages } from '../app-messages';
import { LayoutService } from '../../layout/service/layout.service';
import { SkeletonChart } from '../app-skeletons/skeleton-chart';

declare const ApexCharts: any;

// ── Tipos ──────────────────────────────────────────────────────────────────────

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'column'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap';

export interface ApexChartSeries {
  name?: string;
  data: (number | [number, number] | { x: any; y: any })[];
  color?: string;
}

export interface ApexChartConfig {
  stacked?: boolean;
  stackType?: '100%';
  animations?: boolean;
  zoom?: boolean;
  toolbar?: boolean;
  sparkline?: boolean;
  xaxisType?: 'category' | 'datetime' | 'numeric';
  xaxisCategories?: string[] | number[];
  xaxisTitle?: string;
  yaxisTitle?: string;
  yaxisMin?: number;
  yaxisMax?: number;
  yaxisFormatter?: (val: number) => string;
  dataLabels?: boolean;
  tooltipFormatter?: (val: number) => string;
  legend?: boolean;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  grid?: boolean;
  strokeCurve?: 'smooth' | 'straight' | 'stepline' | 'monotoneCubic';
  strokeWidth?: number;
  fillOpacity?: number;
  colors?: string[];
  overrides?: Record<string, any>;
}

// ── Componente ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [SkeletonChart, AppMessages],
  template: `
    @if (loading()) {
      <skeleton-chart [type]="type()" [height]="height()" [columns]="columnsSkeleton()" />
    } @else if (isEmpty()) {
      <div [style.height.px]="height()">
        <app-messages
          [message]="{
            description: emptyMessage(),
            icon: 'ph-duotone ph-chart-bar',
            size: 'xl',
          }"
        />
      </div>
    } @else {
      <div #chartContainer [style.height.px]="height()"></div>
    }
  `,
})
export class AppChart implements OnDestroy {
  // ── Inputs ─────────────────────────────────────────────────────────────────
  readonly type = input.required<ChartType>();
  readonly series = input.required<ApexChartSeries[] | number[]>();
  readonly height = input<number>(350);
  readonly width = input<number | string>('100%');
  readonly config = input<ApexChartConfig>({});
  readonly loading = input<boolean>(false);
  readonly columnsSkeleton = input<number>(6);
  readonly emptyMessage = input<string>('messages.noRecords');

  // cuando el @if muestra/oculta el div, el signal pasa de undefined ↔ ElementRef
  private readonly chartContainer = viewChild<ElementRef>('chartContainer');

  private readonly platformId = inject(PLATFORM_ID);
  private readonly injector = inject(Injector);
  private readonly layoutService = inject(LayoutService);
  private chart: any = null;

  // true si no hay datos en ninguna serie
  readonly isEmpty = computed<boolean>(() => {
    const s = this.series();
    if (!s || s.length === 0) return true;
    if (typeof s[0] === 'number') return false;
    return (s as ApexChartSeries[]).every((item) => !item.data?.length);
  });

  // engloba todos los inputs + tema + color primario → cualquier cambio re-renderiza
  private readonly chartOptions = computed(() => this.buildOptions());

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    // esperamos el primer paint para tener el DOM listo
    afterNextRender(() => {
      runInInjectionContext(this.injector, () => {
        effect(() => {
          const el = this.chartContainer()?.nativeElement;
          const options = this.chartOptions();

          // div oculto (loading/empty) → limpiamos y salimos
          if (!el) {
            this.destroyChart();
            return;
          }

          // div visible → recreamos el chart con las opciones actuales
          this.destroyChart();
          this.chart = new ApexCharts(el, options);
          this.chart.render();
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  private destroyChart(): void {
    this.chart?.destroy();
    this.chart = null;
  }

  // ── Options ────────────────────────────────────────────────────────────────

  private buildOptions(): Record<string, any> {
    const cfg = this.config();
    const defaults = this.getTypeDefaults();
    const theme = this.buildTheme();

    const apexType = this.type() === 'column' ? 'bar' : this.type();
    const isHorizontal = this.type() === 'bar';

    const base: Record<string, any> = {
      chart: {
        type: apexType,
        height: this.height(),
        width: this.width(),
        background: 'transparent',
        parentHeightOffset: 0, // elimina el min-height que ApexCharts inyecta en el wrapper
        stacked: cfg.stacked ?? defaults['stacked'] ?? false,
        stackType: cfg.stackType,
        sparkline: { enabled: cfg.sparkline ?? false },
        zoom: { enabled: cfg.zoom ?? defaults['zoom'] ?? true },
        toolbar: { show: cfg.toolbar ?? defaults['toolbar'] ?? true },
        animations: {
          enabled: cfg.animations ?? true,
          easing: 'easeinout',
          speed: 400,
        },
        foreColor: theme.foreColor,
      },
      series: this.series(),
      colors: cfg.colors ?? defaults['colors'] ?? this.defaultPalette(),
      theme: { mode: this.layoutService.isDarkTheme() ? 'dark' : 'light' },
      plotOptions: {
        bar: {
          horizontal: isHorizontal,
          borderRadius: defaults['borderRadius'] ?? 4,
          columnWidth: defaults['columnWidth'] ?? '55%',
          dataLabels: { position: 'top' },
        },
        pie: { donut: { size: this.type() === 'donut' ? '65%' : '0%' } },
        heatmap: { shadeIntensity: 0.5, radius: 2 },
        radialBar: {
          hollow: { size: '60%' },
          dataLabels: {
            name: { fontSize: '14px' },
            value: { fontSize: '20px', fontWeight: 700 },
          },
        },
      },
      dataLabels: {
        enabled: cfg.dataLabels ?? defaults['dataLabels'] ?? false,
        style: { fontSize: '11px', fontWeight: 600 },
      },
      stroke: {
        curve: cfg.strokeCurve ?? defaults['strokeCurve'] ?? 'smooth',
        width: cfg.strokeWidth ?? defaults['strokeWidth'] ?? 2,
        colors: defaults['strokeColors'],
      },
      fill: {
        type: defaults['fillType'] ?? 'solid',
        opacity: cfg.fillOpacity ?? defaults['fillOpacity'] ?? 1,
        gradient: defaults['gradient'],
      },
      markers: {
        size: defaults['markerSize'] ?? 0,
        strokeWidth: 2,
        hover: { size: 5 },
      },
      xaxis: {
        type: this.type() === 'candlestick' ? 'datetime' : (cfg.xaxisType ?? 'category'),
        ...(cfg.xaxisCategories ? { categories: cfg.xaxisCategories } : {}),
        ...(cfg.xaxisTitle ? { title: { text: cfg.xaxisTitle, style: { fontWeight: 600 } } } : {}),
        axisBorder: { show: true, color: theme.borderColor },
        axisTicks: { show: true, color: theme.borderColor },
        labels: { style: { colors: [theme.labelColor], fontSize: '12px' } },
      },
      yaxis: {
        ...(cfg.yaxisTitle ? { title: { text: cfg.yaxisTitle, style: { fontWeight: 600 } } } : {}),
        ...(cfg.yaxisMin !== undefined ? { min: cfg.yaxisMin } : {}),
        ...(cfg.yaxisMax !== undefined ? { max: cfg.yaxisMax } : {}),
        labels: {
          style: { colors: [theme.labelColor], fontSize: '12px' },
          ...(cfg.yaxisFormatter ? { formatter: cfg.yaxisFormatter } : {}),
        },
      },
      grid: {
        show: cfg.grid ?? defaults['grid'] ?? true,
        borderColor: theme.borderColor,
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
      },
      legend: {
        show: cfg.legend ?? true,
        position: cfg.legendPosition ?? 'bottom',
        fontWeight: 500,
        labels: { colors: theme.foreColor },
      },
      tooltip: {
        theme: this.layoutService.isDarkTheme() ? 'dark' : 'light',
        y: cfg.tooltipFormatter ? { formatter: cfg.tooltipFormatter } : undefined,
      },
    };

    const options = cfg.overrides ? this.deepMerge(base, cfg.overrides) : base;
    return this.stripUndefined(options);
  }

  // ── Defaults por tipo ──────────────────────────────────────────────────────

  private getTypeDefaults(): Record<string, any> {
    const map: Record<string, Record<string, any>> = {
      line: {
        strokeWidth: 2.5,
        strokeCurve: 'smooth',
        markerSize: 4,
        zoom: true,
        toolbar: true,
        dataLabels: false,
      },
      area: {
        strokeWidth: 2,
        strokeCurve: 'smooth',
        fillType: 'gradient',
        fillOpacity: 0.4,
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [0, 95, 100],
        },
        dataLabels: false,
        zoom: true,
      },
      column: {
        borderRadius: 5,
        columnWidth: '55%',
        dataLabels: false,
        strokeWidth: 0,
        strokeColors: ['transparent'],
        toolbar: true,
      },
      bar: {
        borderRadius: 4,
        dataLabels: false,
        strokeWidth: 0,
        strokeColors: ['transparent'],
      },
      pie: {
        dataLabels: true,
        strokeWidth: 2,
        toolbar: false,
        grid: false,
      },
      donut: {
        dataLabels: true,
        strokeWidth: 2,
        toolbar: false,
        grid: false,
      },
      heatmap: {
        dataLabels: false,
        strokeWidth: 1,
        toolbar: true,
      },
      radialBar: {
        toolbar: false,
        grid: false,
        dataLabels: true,
      },
      scatter: {
        markerSize: 6,
        strokeWidth: 1,
        fillOpacity: 0.8,
        zoom: true,
      },
      radar: {
        strokeWidth: 2,
        fillOpacity: 0.2,
        dataLabels: false,
        toolbar: false,
      },
      treemap: {
        dataLabels: true,
        toolbar: false,
        grid: false,
      },
      candlestick: {
        toolbar: true,
        zoom: true,
      },
    };

    return map[this.type()] ?? {};
  }

  // ── Tema ───────────────────────────────────────────────────────────────────

  private buildTheme() {
    return this.layoutService.isDarkTheme()
      ? { foreColor: '#d1d5db', labelColor: '#9ca3af', borderColor: '#374151' }
      : { foreColor: '#374151', labelColor: '#6b7280', borderColor: '#e5e7eb' };
  }

  // ── Colores ────────────────────────────────────────────────────────────────

  private defaultPalette(): string[] {
    const primary = this.layoutService.currentPrimaryColor();
    return [primary, ...PRESET_COLORS.slice(1)];
  }

  // ApexCharts falla si recibe keys con valor undefined, ej: formatter: undefined
  private stripUndefined(obj: any): any {
    if (Array.isArray(obj)) return obj.map((v) => this.stripUndefined(v));
    if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, this.stripUndefined(v)]),
      );
    }
    return obj;
  }

  // merge recursivo para aplicar overrides sin perder defaults
  private deepMerge(target: any, source: any): any {
    const result = { ...target };
    for (const key of Object.keys(source)) {
      const val = source[key];
      result[key] =
        val && typeof val === 'object' && !Array.isArray(val) ? this.deepMerge(target[key] ?? {}, val) : val;
    }
    return result;
  }
}
