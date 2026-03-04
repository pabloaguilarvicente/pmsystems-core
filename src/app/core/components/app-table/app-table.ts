import { Component, computed, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SkeletonModule } from 'primeng/skeleton';
import { TranslateModule } from '@ngx-translate/core';
import { LocaleDatePipe } from '../../pipes/locale-date-pipe.pipe';
import { AppMessages } from '../app-messages';
import { AppPaginator, PaginatorChangeEvent } from '../app-paginator';
import { SkeletonPaginator } from '../app-skeletons/skeleton-paginator';
import { Column, TableInput } from './app-table.model';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    ButtonModule,
    MenuModule,
    SkeletonModule,
    TranslateModule,
    LocaleDatePipe,
    AppMessages,
    AppPaginator,
    SkeletonPaginator,
  ],
  templateUrl: './app-table.html',
})
export class AppTable {
  public readonly config = input.required<TableInput>();

  public readonly lazyLoad = output<any>();
  public readonly pageChange = output<PaginatorChangeEvent>();

  public readonly visibleColumns = computed<Column[]>(() =>
    this.config().columns.filter((col) => col.visible !== false),
  );

  getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }

  onLazyLoad(event: any) {
    this.lazyLoad.emit(event);
  }

  onPaginatorChange(event: PaginatorChangeEvent) {
    this.pageChange.emit(event);
  }

  getSkeletonRows(): any[] {
    const rowCount = this.config().pagination?.pageSize ?? 5;
    return Array.from({ length: rowCount }, (_, i) => ({ id: `skeleton-${i}` }));
  }

  public onRowSelect(event: any) {
    this.config().onRowClick?.(event.data);
  }
}
