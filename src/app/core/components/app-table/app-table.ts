import { Component, input, output, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SkeletonModule } from 'primeng/skeleton';
import { TranslateModule } from '@ngx-translate/core';
import { LocaleDatePipe } from '../../pipes/locale-date-pipe.pipe';
import { AppMessages } from '../app-messages';
import { AppPaginator, PaginatorChangeEvent } from '../app-paginator';
import { AppConfirmationDialog } from '../confirmation-dialog/app-confirmation-dialog';
import { NO_DATA_IMAGE } from '../../commons/core.constants';
import { TableInput } from './app-table.model';
import { SkeletonPaginator } from '../skeletons/skeleton-paginator';

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
    AppConfirmationDialog,
    SkeletonPaginator,
  ],
  templateUrl: './app-table.html',
})
export class AppTable {
  @ViewChild(AppConfirmationDialog) confirmDialog!: AppConfirmationDialog;

  public readonly config = input.required<TableInput>();

  public readonly lazyLoad = output<any>();
  public readonly pageChange = output<PaginatorChangeEvent>();

  public NO_DATA_IMAGE = NO_DATA_IMAGE;

  getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }

  onLazyLoad(event: any) {
    this.lazyLoad.emit(event);
  }

  onPaginatorChange(event: PaginatorChangeEvent) {
    this.pageChange.emit(event);
  }

  confirm(config: any) {
    this.confirmDialog.confirm(config);
  }

  getSkeletonRows(): any[] {
    const rowCount = this.config().pagination?.pageSize ?? 5;
    return Array.from({ length: rowCount }, (_, i) => ({ id: `skeleton-${i}` }));
  }
}
