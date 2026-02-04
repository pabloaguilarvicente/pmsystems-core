import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { Pagination } from '../commons/api.utils';

export interface PaginatorChangeEvent {
  currentPage: number;
  pageSize: number;
}

@Component({
  selector: 'app-paginator',
  imports: [ButtonModule, SelectModule, FormsModule, TooltipModule, TranslateModule],
  template: `
    <div class="flex flex-col justify-end gap-3 px-4 py-3 md:flex-row md:items-center md:gap-4">
      <!-- Fila 1: Info de resultados -->
      <div class="flex items-center justify-center gap-2 text-sm text-gray-500 md:justify-start">
        <span class=""> {{ firstRecord() }}-{{ lastRecord() }} </span>
        <span class="text-gray-500">{{ 'paginator.of' | translate }}</span>
        <span class="">{{ pagination().totalItems }}</span>
        <span class="text-gray-500">{{ 'paginator.results' | translate }}</span>
      </div>

      <!-- Fila 2: Controles de navegación -->
      <div class="flex items-center justify-center gap-1">
        <!-- Primera página -->
        <p-button
          icon="ph-bold ph-caret-double-left"
          variant="text"
          [disabled]="!pagination().hasPreviousPage || loading()"
          (onClick)="goToFirstPage()"
          [pTooltip]="'primeng.aria.firstPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          size="small"
          styleClass="shadow-sm!"
        />

        <!-- Página anterior -->
        <p-button
          icon="ph-bold ph-caret-left"
          variant="text"
          [disabled]="!pagination().hasPreviousPage || loading()"
          (onClick)="goToPreviousPage()"
          [pTooltip]="'primeng.aria.prevPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          size="small"
          styleClass="shadow-sm!"
        />

        <!-- Indicador de página actual -->
        <div class="flex items-center gap-2 mx-2 px-3">
          <span class="text-sm  text-gray-500">{{ 'paginator.page' | translate }}</span>
          <span class="text-sm font-extrabold">{{ pagination().currentPage }}</span>
          <span class="text-sm text-gray-500">{{ 'paginator.of' | translate }}</span>
          <span class="text-sm  text-gray-500">{{ pagination().totalPages }}</span>
        </div>

        <!-- Página siguiente -->
        <p-button
          icon="ph-bold ph-caret-right"
          variant="text"
          [disabled]="!pagination().hasNextPage || loading()"
          (onClick)="goToNextPage()"
          [pTooltip]="'primeng.aria.nextPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          size="small"
          styleClass="shadow-sm!"
        />

        <!-- Última página -->
        <p-button
          icon="ph-bold ph-caret-double-right"
          variant="text"
          [disabled]="!pagination().hasNextPage || loading()"
          (onClick)="goToLastPage()"
          [pTooltip]="'primeng.aria.lastPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          size="small"
          styleClass="shadow-sm!"
        />
      </div>

      <!-- Fila 3: Selector de items por página -->
      <div class="flex items-center justify-center gap-2 md:justify-start">
        <label class="text-sm text-gray-600 whitespace-nowrap">
          {{ 'actions.show' | translate }}
        </label>
        <p-select
          [options]="pageSizeDropdownOptions()"
          [ngModel]="selectedPageSize()"
          (onChange)="onPageSizeChange($event)"
          [readonly]="loading()"
          class="w-21 border-none! shadow-sm!"
          appendTo="body"
          size="small"
        >
          <ng-template #selectedItem let-item>
            @if (item) {
              <span class="text-sm  text-gray-500">{{ item.label }}</span>
            }
          </ng-template>
        </p-select>
        <span class="text-sm text-gray-600 whitespace-nowrap">{{
          'paginator.perPage' | translate
        }}</span>
      </div>
    </div>
  `,
})
export class AppPaginator {
  public pagination = input.required<Pagination>();
  public loading = input<boolean>(false);
  public pageSizeOptions = input<number[]>([5, 10, 25, 50, 100]);
  public pageChange = output<PaginatorChangeEvent>();
  public Math = Math;

  public pageSizeDropdownOptions = computed(() =>
    this.pageSizeOptions().map((size) => ({
      label: size.toString(),
      value: size,
    })),
  );

  public selectedPageSize = computed(() => this.pagination().pageSize);

  public firstRecord = computed(
    () => (this.pagination().currentPage - 1) * this.pagination().pageSize + 1,
  );

  public lastRecord = computed(() =>
    Math.min(
      this.pagination().currentPage * this.pagination().pageSize,
      this.pagination().totalItems,
    ),
  );

  private emitPageChange(page: number, pageSize?: number): void {
    this.pageChange.emit({
      currentPage: page,
      pageSize: pageSize ?? this.pagination().pageSize,
    });
  }

  public onPageSizeChange(event: any): void {
    this.emitPageChange(1, event.value);
  }

  public goToFirstPage(): void {
    if (this.pagination().hasPreviousPage) {
      this.emitPageChange(1);
    }
  }

  public goToPreviousPage(): void {
    if (this.pagination().hasPreviousPage) {
      this.emitPageChange(this.pagination().currentPage - 1);
    }
  }

  public goToNextPage(): void {
    if (this.pagination().hasNextPage) {
      this.emitPageChange(this.pagination().currentPage + 1);
    }
  }

  public goToLastPage(): void {
    if (this.pagination().hasNextPage) {
      this.emitPageChange(this.pagination().totalPages);
    }
  }
}
