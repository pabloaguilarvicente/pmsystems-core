import { Component, computed, input } from '@angular/core';
import { ChartType } from '../app-chart/app-chart';

@Component({
  selector: 'skeleton-chart',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full overflow-hidden animate-pulse" [style.height.px]="height()">
      <!-- LINE ────────────────────────────────────────────────────────────── -->
      @if (type() === 'line') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <!-- eje Y -->
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 relative overflow-hidden">
              <!-- grid lines -->
              @for (i of yLabels(); track $index) {
                <div
                  class="absolute left-0 right-0 h-px bg-surface-200 dark:bg-surface-700"
                  [style.top.%]="$index * 25"
                ></div>
              }
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  [attr.d]="linePoints1()"
                  fill="none"
                  class="stroke-surface-300 dark:stroke-surface-600"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  vector-effect="non-scaling-stroke"
                />
                <path
                  [attr.d]="linePoints2()"
                  fill="none"
                  class="stroke-surface-300 dark:stroke-surface-600"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-dasharray="4 3"
                  vector-effect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          <!-- eje X -->
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
          <!-- leyenda -->
          <div class="flex justify-center gap-6 mt-3">
            @for (i of legendItems2(); track $index) {
              <div class="flex items-center gap-2">
                <div class="w-6 h-2 rounded-full bg-surface-300 dark:bg-surface-600"></div>
                <div class="h-2 w-12 rounded bg-surface-200 dark:bg-surface-700"></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- AREA ────────────────────────────────────────────────────────────── -->
      @if (type() === 'area') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <!-- eje Y -->
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 relative overflow-hidden">
              @for (i of yLabels(); track $index) {
                <div
                  class="absolute left-0 right-0 h-px bg-surface-200 dark:bg-surface-700"
                  [style.top.%]="$index * 25"
                ></div>
              }
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path [attr.d]="areaPolygon()" class="fill-surface-200 dark:fill-surface-700" opacity="0.7" />
                <path
                  [attr.d]="linePoints1()"
                  fill="none"
                  class="stroke-surface-300 dark:stroke-surface-600"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  vector-effect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          <!-- eje X -->
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
          <!-- leyenda -->
          <div class="flex justify-center gap-6 mt-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-2 rounded-full bg-surface-300 dark:bg-surface-600"></div>
              <div class="h-2 w-14 rounded bg-surface-200 dark:bg-surface-700"></div>
            </div>
          </div>
        </div>
      }

      <!-- BAR (horizontal) ────────────────────────────────────────────────── -->
      @if (type() === 'bar') {
        <div class="flex h-full gap-3">
          <div class="flex flex-col justify-around py-2 shrink-0">
            @for (w of barWidths(); track $index) {
              <div class="h-2 w-9 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
          <div class="flex flex-col justify-around flex-1 py-2">
            @for (w of barWidths(); track $index) {
              <div class="flex items-center">
                <div class="h-5 rounded bg-surface-300 dark:bg-surface-600" [style.width.%]="w"></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- COLUMN (vertical) ───────────────────────────────────────────────── -->
      @if (type() === 'column') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 flex items-end justify-between gap-2">
              @for (h of columnHeights(); track $index) {
                <div class="flex-1 rounded-t bg-surface-300 dark:bg-surface-600" [style.height.px]="h"></div>
              }
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }

      <!-- PIE ─────────────────────────────────────────────────────────────── -->
      @if (type() === 'pie') {
        <div class="flex flex-col items-center justify-center h-full gap-4">
          <div
            class="rounded-full bg-surface-300 dark:bg-surface-600 shrink-0"
            [style.width.px]="pieSize()"
            [style.height.px]="pieSize()"
          ></div>
          <div class="flex gap-4">
            @for (i of legendItems4(); track $index) {
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-surface-300 dark:bg-surface-600"></div>
                <div class="h-2 w-12 rounded bg-surface-200 dark:bg-surface-700"></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- DONUT ───────────────────────────────────────────────────────────── -->
      @if (type() === 'donut') {
        <div class="flex flex-col items-center justify-center h-full gap-4">
          <div class="relative shrink-0" [style.width.px]="pieSize()" [style.height.px]="pieSize()">
            <div class="rounded-full bg-surface-300 dark:bg-surface-600 w-full h-full"></div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-0 dark:bg-surface-900"
              [style.width.px]="pieSize() * 0.55"
              [style.height.px]="pieSize() * 0.55"
            ></div>
          </div>
          <div class="flex gap-4">
            @for (i of legendItems4(); track $index) {
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-surface-300 dark:bg-surface-600"></div>
                <div class="h-2 w-12 rounded bg-surface-200 dark:bg-surface-700"></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- RADIAL BAR ───────────────────────────────────────────────────────── -->
      @if (type() === 'radialBar') {
        <div class="flex items-center justify-center h-full">
          <div class="relative" [style.width.px]="pieSize()" [style.height.px]="pieSize()">
            <div class="w-full h-full rounded-full bg-surface-300 dark:bg-surface-600"></div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-0 dark:bg-surface-900 flex flex-col items-center justify-center gap-2"
              [style.width.px]="pieSize() * 0.62"
              [style.height.px]="pieSize() * 0.62"
            >
              <div class="h-4 w-10 rounded bg-surface-300 dark:bg-surface-600"></div>
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            </div>
          </div>
        </div>
      }

      <!-- HEATMAP ─────────────────────────────────────────────────────────── -->
      @if (type() === 'heatmap') {
        <div class="flex h-full gap-2">
          <div class="flex flex-col justify-around py-1 shrink-0">
            @for (r of heatmapRows(); track $index) {
              <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
          <div class="flex flex-col flex-1 gap-1.5 py-1">
            @for (row of heatmapRows(); track $index) {
              <div class="flex flex-1 gap-1.5">
                @for (col of heatmapCols(); track $index) {
                  <div
                    class="flex-1 rounded bg-surface-300 dark:bg-surface-600"
                    [style.opacity]="heatOpacity($index, $index)"
                  ></div>
                }
              </div>
            }
          </div>
        </div>
      }

      <!-- SCATTER ─────────────────────────────────────────────────────────── -->
      @if (type() === 'scatter') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 relative">
              @for (dot of scatterDots(); track $index) {
                <div
                  class="absolute w-3 h-3 rounded-full bg-surface-300 dark:bg-surface-600"
                  [style.left.%]="dot.x"
                  [style.top.%]="dot.y"
                ></div>
              }
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }

      <!-- RADAR ───────────────────────────────────────────────────────────── -->
      @if (type() === 'radar') {
        <div class="flex items-center justify-center h-full">
          <div class="relative" [style.width.px]="pieSize()" [style.height.px]="pieSize()">
            @for (r of radarRings(); track $index) {
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface-300 dark:border-surface-600"
                [style.width.px]="r"
                [style.height.px]="r"
              ></div>
            }
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-300 dark:bg-surface-600 opacity-30"
              [style.width.px]="pieSize() * 0.6"
              [style.height.px]="pieSize() * 0.6"
            ></div>
          </div>
        </div>
      }

      <!-- TREEMAP ─────────────────────────────────────────────────────────── -->
      @if (type() === 'treemap') {
        <div class="grid gap-1.5 h-full" style="grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr;">
          <div class="rounded-lg bg-surface-300 dark:bg-surface-600" style="grid-row: 1 / 3;"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700"></div>
          <div class="rounded-lg bg-surface-300 dark:bg-surface-600 opacity-70"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700 opacity-70"></div>
          <div class="rounded-lg bg-surface-200 dark:bg-surface-700 opacity-70"></div>
        </div>
      }

      <!-- CANDLESTICK ─────────────────────────────────────────────────────── -->
      @if (type() === 'candlestick') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 flex items-center justify-between gap-2 px-2">
              @for (c of candlesticks(); track $index) {
                <div class="flex-1 flex flex-col items-center gap-0.5">
                  <div class="w-0.5 bg-surface-300 dark:bg-surface-600" [style.height.px]="c.wickTop"></div>
                  <div class="w-full rounded-sm bg-surface-300 dark:bg-surface-600" [style.height.px]="c.body"></div>
                  <div class="w-0.5 bg-surface-300 dark:bg-surface-600" [style.height.px]="c.wickBottom"></div>
                </div>
              }
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }

      <!-- BUBBLE ──────────────────────────────────────────────────────────── -->
      @if (type() === 'bubble') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 relative">
              @for (b of bubbles(); track $index) {
                <div
                  class="absolute rounded-full bg-surface-300 dark:bg-surface-600 opacity-60"
                  [style.left.%]="b.x"
                  [style.top.%]="b.y"
                  [style.width.px]="b.size"
                  [style.height.px]="b.size"
                  style="transform: translate(-50%, -50%)"
                ></div>
              }
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }

      <!-- POLAR AREA ──────────────────────────────────────────────────────── -->
      @if (type() === 'polarArea') {
        <div class="flex flex-col items-center justify-center h-full gap-4">
          <div class="relative shrink-0" [style.width.px]="pieSize()" [style.height.px]="pieSize()">
            <div class="w-full h-full rounded-full bg-surface-300 dark:bg-surface-600 opacity-40"></div>
            @for (r of polarRings(); track $index) {
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface-0 dark:border-surface-900"
                [style.width.px]="r"
                [style.height.px]="r"
              ></div>
            }
          </div>
          <div class="flex gap-4">
            @for (i of legendItems4(); track $index) {
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-surface-300 dark:bg-surface-600"></div>
                <div class="h-2 w-10 rounded bg-surface-200 dark:bg-surface-700"></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- RANGE BAR ───────────────────────────────────────────────────────── -->
      @if (type() === 'rangeBar') {
        <div class="flex h-full gap-3">
          <div class="flex flex-col justify-around py-2 shrink-0">
            @for (i of rangeBarItems(); track $index) {
              <div class="h-2 w-9 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
          <div class="flex flex-col justify-around flex-1 py-2 gap-2">
            @for (r of rangeBarItems(); track $index) {
              <div class="relative h-4">
                <div
                  class="absolute h-full rounded bg-surface-300 dark:bg-surface-600"
                  [style.left.%]="r.start"
                  [style.width.%]="r.width"
                ></div>
              </div>
            }
          </div>
        </div>
      }

      <!-- RANGE AREA ──────────────────────────────────────────────────────── -->
      @if (type() === 'rangeArea') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 relative overflow-hidden">
              @for (i of yLabels(); track $index) {
                <div
                  class="absolute left-0 right-0 h-px bg-surface-200 dark:bg-surface-700"
                  [style.top.%]="$index * 25"
                ></div>
              }
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path [attr.d]="rangeAreaPolygon()" class="fill-surface-200 dark:fill-surface-700" opacity="0.7" />
                <path
                  [attr.d]="linePoints1()"
                  fill="none"
                  class="stroke-surface-300 dark:stroke-surface-600"
                  stroke-width="2"
                  stroke-linecap="round"
                  vector-effect="non-scaling-stroke"
                />
                <path
                  [attr.d]="linePoints2()"
                  fill="none"
                  class="stroke-surface-300 dark:stroke-surface-600"
                  stroke-width="2"
                  stroke-linecap="round"
                  vector-effect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }

      <!-- BOX PLOT ────────────────────────────────────────────────────────── -->
      @if (type() === 'boxPlot') {
        <div class="flex flex-col h-full">
          <div class="flex flex-1 gap-3 overflow-hidden">
            <div class="flex flex-col justify-between py-1 shrink-0">
              @for (i of yLabels(); track $index) {
                <div class="h-2 w-8 rounded bg-surface-200 dark:bg-surface-700"></div>
              }
            </div>
            <div class="flex-1 flex items-center justify-around gap-3 px-2">
              @for (b of boxPlots(); track $index) {
                <div class="flex-1 flex flex-col items-center">
                  <div class="w-0.5 bg-surface-300 dark:bg-surface-600" [style.height.px]="b.whiskerTop"></div>
                  <div class="w-3 h-0.5 bg-surface-300 dark:bg-surface-600"></div>
                  <div
                    class="w-full rounded-sm border-2 border-surface-300 dark:border-surface-600 bg-surface-200 dark:bg-surface-700"
                    [style.height.px]="b.box"
                  ></div>
                  <div class="w-3 h-0.5 bg-surface-300 dark:bg-surface-600"></div>
                  <div class="w-0.5 bg-surface-300 dark:bg-surface-600" [style.height.px]="b.whiskerBottom"></div>
                </div>
              }
            </div>
          </div>
          <div class="flex justify-between pl-11 mt-2">
            @for (i of xLabels(); track $index) {
              <div class="h-2 w-7 rounded bg-surface-200 dark:bg-surface-700"></div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class SkeletonChart {
  readonly type = input.required<ChartType>();
  readonly height = input<number>(350);
  readonly columns = input<number>(6);

  // ── Helpers ──────────────────────────────────────────────────────────────────

  readonly isLineOrArea = computed(() => this.type() === 'line' || this.type() === 'area');
  readonly isPieOrDonut = computed(() => this.type() === 'pie' || this.type() === 'donut');

  readonly yLabels = computed(() => Array.from({ length: 5 }));
  readonly xLabels = computed(() => Array.from({ length: this.columns() }));
  readonly legendItems2 = computed(() => Array.from({ length: 2 }));
  readonly legendItems4 = computed(() => Array.from({ length: 4 }));
  readonly pieSize = computed(() => Math.min(this.height() * 0.65, 200));

  // ── Line / Area ──────────────────────────────────────────────────────────────

  private readonly wave1 = [0.55, 0.35, 0.65, 0.2, 0.5, 0.1, 0.4, 0.3, 0.45, 0.15, 0.7, 0.25];
  private readonly wave2 = [0.6, 0.45, 0.7, 0.35, 0.55, 0.25, 0.5, 0.4, 0.6, 0.3, 0.75, 0.4];

  // Convierte un array de valores Y (0-1) en un path SVG smooth con bezier cúbico
  private smoothPath(values: number[]): string {
    const n = values.length;
    const pts = values.map((v, i) => ({ x: (i / (n - 1)) * 100, y: v * 100 }));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx},${prev.y} ${cpx},${curr.y} ${curr.x},${curr.y}`;
    }
    return d;
  }

  readonly linePoints1 = computed(() => this.smoothPath(this.wave1));
  readonly linePoints2 = computed(() => this.smoothPath(this.wave2));

  readonly areaPolygon = computed(() => {
    const lastX = 100;
    return `${this.linePoints1()} L ${lastX},100 L 0,100 Z`;
  });

  readonly rangeAreaPolygon = computed(() => {
    const n = this.wave1.length;
    const top = this.smoothPath(this.wave1);
    // El path de abajo empieza en x=100 y va hacia x=0
    const bottomPts = [...this.wave2].reverse().map((v, i) => ({
      x: ((n - 1 - i) / (n - 1)) * 100,
      y: v * 100,
    }));
    let bottomD = '';
    for (let i = 1; i < bottomPts.length; i++) {
      const prev = bottomPts[i - 1];
      const curr = bottomPts[i];
      const cpx = (prev.x + curr.x) / 2;
      bottomD += ` C ${cpx},${prev.y} ${cpx},${curr.y} ${curr.x},${curr.y}`;
    }
    return `${top} L 100,${this.wave2[this.wave2.length - 1] * 100} ${bottomD} Z`;
  });

  // ── Column ───────────────────────────────────────────────────────────────────

  readonly columnHeights = computed(() => {
    const maxH = (this.height() - 48) * 0.82;
    const steps = [0.6, 0.4, 0.8, 0.5, 0.9, 0.35, 0.7];
    return Array.from({ length: this.columns() }, (_, i) => Math.round(steps[i % steps.length] * maxH));
  });

  // ── Bar ──────────────────────────────────────────────────────────────────────

  readonly barWidths = computed(() => {
    const steps = [65, 45, 80, 55, 70, 40, 60];
    return Array.from({ length: this.columns() }, (_, i) => steps[i % steps.length]);
  });

  // ── Scatter / Bubble ─────────────────────────────────────────────────────────

  readonly scatterDots = computed(() => [
    { x: 15, y: 20 },
    { x: 35, y: 55 },
    { x: 55, y: 30 },
    { x: 70, y: 65 },
    { x: 85, y: 15 },
    { x: 25, y: 75 },
    { x: 60, y: 80 },
    { x: 45, y: 40 },
    { x: 80, y: 50 },
    { x: 10, y: 60 },
    { x: 50, y: 10 },
    { x: 90, y: 35 },
  ]);

  readonly bubbles = computed(() => [
    { x: 20, y: 30, size: 40 },
    { x: 50, y: 60, size: 28 },
    { x: 75, y: 25, size: 50 },
    { x: 35, y: 70, size: 22 },
    { x: 65, y: 45, size: 35 },
    { x: 85, y: 70, size: 18 },
    { x: 15, y: 55, size: 30 },
    { x: 55, y: 20, size: 42 },
  ]);

  // ── Radar ────────────────────────────────────────────────────────────────────

  readonly radarRings = computed(() => {
    const s = this.pieSize();
    return [s * 0.25, s * 0.5, s * 0.75, s];
  });

  // ── Heatmap ──────────────────────────────────────────────────────────────────

  readonly heatmapRows = computed(() => Array.from({ length: 5 }));
  readonly heatmapCols = computed(() => Array.from({ length: this.columns() }));

  heatOpacity(row: number, col: number): number {
    const pattern = [0.9, 0.4, 0.7, 0.3, 0.6, 0.8, 0.5];
    return pattern[(row + col) % pattern.length];
  }

  // ── Candlestick ──────────────────────────────────────────────────────────────

  readonly candlesticks = computed(() => {
    const data = [
      { body: 32, wickTop: 18, wickBottom: 12 },
      { body: 20, wickTop: 24, wickBottom: 8 },
      { body: 40, wickTop: 12, wickBottom: 16 },
      { body: 16, wickTop: 20, wickBottom: 10 },
      { body: 36, wickTop: 14, wickBottom: 18 },
      { body: 24, wickTop: 22, wickBottom: 12 },
      { body: 44, wickTop: 10, wickBottom: 14 },
    ];
    return Array.from({ length: this.columns() }, (_, i) => data[i % data.length]);
  });

  // ── Range Bar ────────────────────────────────────────────────────────────────

  readonly rangeBarItems = computed(() => {
    const items = [
      { start: 10, width: 40 },
      { start: 25, width: 30 },
      { start: 5, width: 55 },
      { start: 35, width: 25 },
      { start: 15, width: 45 },
      { start: 40, width: 35 },
    ];
    return Array.from({ length: this.columns() }, (_, i) => items[i % items.length]);
  });

  // ── Box Plot ─────────────────────────────────────────────────────────────────

  readonly boxPlots = computed(() => {
    const data = [
      { whiskerTop: 20, box: 50, whiskerBottom: 15 },
      { whiskerTop: 14, box: 40, whiskerBottom: 20 },
      { whiskerTop: 24, box: 60, whiskerBottom: 10 },
      { whiskerTop: 18, box: 35, whiskerBottom: 18 },
      { whiskerTop: 16, box: 55, whiskerBottom: 14 },
      { whiskerTop: 22, box: 45, whiskerBottom: 16 },
    ];
    return Array.from({ length: this.columns() }, (_, i) => data[i % data.length]);
  });

  // ── Polar Area ───────────────────────────────────────────────────────────────

  readonly polarRings = computed(() => {
    const s = this.pieSize();
    return [s * 0.33, s * 0.66, s];
  });
}
