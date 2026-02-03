import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserFiltersParams } from '../../models/users.model';
import { Pagination } from '../../../../core/commons/api.utils';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AppPaginator, PaginatorChangeEvent } from '../../../../core/components/app-paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { AppConfirmationDialog } from '../../../../core/components/confirmation-dialog/app-confirmation-dialog';
import { Router } from '@angular/router';
import { LocaleDatePipe } from '../../../../core/pipes/locale-date-pipe.pipe';
import { AppMessages } from '../../../../core/components/app-messages';
import { NO_DATA_IMAGE } from '../../../../core/commons/core.constants';
@Component({
  selector: 'users-main',
  imports: [
    TableModule,
    ButtonModule,
    TooltipModule,
    LocaleDatePipe,
    AppPaginator,
    TranslateModule,
    MenuModule,
    AppTitlePage,
    AppConfirmationDialog,
    AppMessages,
  ],
  templateUrl: './users-main.html',
  providers: [UsersService],
})
export class UsersMain {
  @ViewChild(AppConfirmationDialog) confirmDialog!: AppConfirmationDialog;
  public readonly userService = inject(UsersService);
  public readonly router = inject(Router);

  public users = signal<User[]>([]);
  public pagination = signal<Pagination | undefined>(undefined);
  public isLoading = signal<boolean>(false);

  public filterParams = signal<UserFiltersParams>({
    currentPage: 1,
    pageSize: 5,
  });

  public NO_DATA_IMAGE = NO_DATA_IMAGE;

  getMenuItems(item: User): MenuItem[] {
    return [
      {
        label: 'actions.update',
        icon: 'ph-bold ph-pencil-simple',
        command: () => this.redirectUpdate(item),
      },
      {
        label: 'actions.delete',
        icon: 'ph-bold ph-trash-simple',
        command: () => this.confirmDelete(item),
      },
    ];
  }

  getAll() {
    this.isLoading.set(true);
    this.userService.getAll(this.filterParams()).subscribe({
      next: (response) => {
        this.users.set(response.data);
        this.pagination.set(response.pagination);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }

  private updateFiltersAndLoad(updates: Partial<UserFiltersParams>) {
    this.filterParams.update((params) => ({
      ...params,
      ...updates,
    }));
    this.getAll();
  }

  public onSort(event: any) {
    this.updateFiltersAndLoad({
      sort: event.sortField,
      order: event.sortOrder === 1 ? 'asc' : event.sortOrder === -1 ? 'desc' : undefined,
    });
  }

  public onPaginatorChange(event: PaginatorChangeEvent) {
    this.updateFiltersAndLoad({
      currentPage: event.currentPage,
      pageSize: event.pageSize,
    });
  }

  private redirectUpdate(item: User) {
    this.router.navigate(['users/update', item.id]);
  }

  private confirmDelete(item: User) {
    this.confirmDialog.confirm({
      type: 'delete',
      header: item.firstName + ' ' + item.lastName,
    });
  }
}
