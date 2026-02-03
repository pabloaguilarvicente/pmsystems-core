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
    <div class="flex flex-col lg:flex-row items-center lg:justify-end gap-3 p-3">
      <div class="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
        <span class="text-sm text-gray-600">
          {{ 'primeng.aria.rowsPerPageLabel' | translate }}
        </span>

        <p-select
          [options]="pageSizeDropdownOptions()"
          [ngModel]="selectedPageSize()"
          (onChange)="onPageSizeChange($event)"
          [readonly]="loading()"
          class="w-20 border-none! shadow-xs!"
          appendTo="body"
          size="small"
        >
          <ng-template #selectedItem let-item>
            @if (item) {
              <span class="text-gray-600 text-center">{{ item.label }}</span>
            }
          </ng-template>
        </p-select>
        <span class="text-sm text-gray-600">
          {{ firstRecord() }} - {{ lastRecord() }} / {{ pagination().totalItems }}
        </span>
      </div>

      <div class="flex items-center w-full lg:w-auto justify-center">
        <p-button
          icon="ph-bold ph-caret-double-left"
          variant="text"
          [disabled]="!pagination().hasPreviousPage || loading()"
          (onClick)="goToFirstPage()"
          [pTooltip]="'primeng.aria.firstPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          styleClass="p-0!"
        ></p-button>

        <p-button
          icon="ph-bold ph-caret-left"
          variant="text"
          [disabled]="!pagination().hasPreviousPage || loading()"
          (onClick)="goToPreviousPage()"
          [pTooltip]="'primeng.aria.prevPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          styleClass="p-0!"
        ></p-button>

        <span class="text-sm text-gray-600 mx-2">{{ pagination().currentPage }}</span>

        <p-button
          icon="ph-bold ph-caret-right"
          variant="text"
          [disabled]="!pagination().hasNextPage || loading()"
          (onClick)="goToNextPage()"
          [pTooltip]="'primeng.aria.nextPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          styleClass="p-0!"
        ></p-button>

        <p-button
          icon="ph-bold ph-caret-double-right"
          variant="text"
          [disabled]="!pagination().hasNextPage || loading()"
          (onClick)="goToLastPage()"
          [pTooltip]="'primeng.aria.lastPageLabel' | translate"
          tooltipPosition="top"
          severity="secondary"
          styleClass="p-0!"
        ></p-button>
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
