import { Component, computed, inject, signal, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserFiltersParams } from '../../models/users.model';
import { ApiListResponse } from '../../../../core/commons/api.utils';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AppTitlePage } from '../../../../core/components/app-title-page';
import { Router } from '@angular/router';
import { PaginatorChangeEvent } from '../../../../core/components/app-paginator';
import { AppTable } from '../../../../core/components/app-table/app-table';
import { Column, TableInput } from '../../../../core/components/app-table/app-table.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDetailDialog } from '../../components/user-detail-dialog/user-detail-dialog';
import { BREAKPOINTS } from '../../../../core/commons/core.constants';

@Component({
  selector: 'users-main',
  imports: [TranslateModule, AppTitlePage, AppTable],
  templateUrl: './users-main.html',
  providers: [UsersService, DialogService],
})
export class UsersMain {
  public ref: DynamicDialogRef | undefined;
  @ViewChild(AppTable) table!: AppTable;

  public readonly userService = inject(UsersService);
  public readonly router = inject(Router);
  public readonly dialogService = inject(DialogService);

  public response = signal<ApiListResponse<User> | null>(null);
  public isLoading = signal<boolean>(false);
  public filterParams = signal<UserFiltersParams>({
    currentPage: 1,
    pageSize: 5,
  });

  public readonly cols: Column[] = [
    {
      field: 'firstName',
      header: 'firstName.label',
      sortable: true,
      width: '15%',
      type: 'text',
    },
    {
      field: 'lastName',
      header: 'lastName.label',
      sortable: true,
      width: '15%',
      type: 'text',
    },
    {
      field: 'email',
      header: 'email.label',
      sortable: true,
      width: '20%',
      type: 'text',
    },
    {
      field: 'username',
      header: 'user.singular.label',
      sortable: true,
      width: '15%',
      type: 'text',
    },
    {
      field: 'role.name',
      header: 'role.singular.label',
      sortable: true,
      sortKey: 'role.name',
      width: '10%',
      type: 'badge',
      badgeClassField: 'role.code',
    },
    {
      field: 'status.name',
      header: 'status.label',
      sortable: false,
      width: '10%',
      type: 'badge',
      badgeClassField: 'status.code',
    },
    {
      field: 'createdAt',
      header: 'registered.label',
      sortable: true,
      width: '10%',
      type: 'date',
      pipe: 'localeDate',
      pipeArgs: 'dd MMM, y',
    },
    {
      field: 'actions',
      header: 'options.label',
      sortable: false,
      width: '5%',
      type: 'actions',
      cellAlign: 'center',
      menuItems: (item: User) => this.getMenuItems(item),
    },
  ];

  public tableConfig = computed<TableInput<User>>(() => ({
    columns: this.cols,
    data: this.response()?.data ?? [],
    loading: this.isLoading(),
    pagination: this.response()?.pagination ?? null,
    lazy: true,
    paginator: false,
  }));

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
      {
        label: 'crud.detail',
        icon: 'ph-bold ph ph-eye',
        command: () => this.showDetail(item),
      },
    ];
  }

  getAll() {
    this.isLoading.set(true);
    this.userService.getAll(this.filterParams()).subscribe({
      next: (response) => {
        this.response.set(response);
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
    this.table.confirm({
      type: 'delete',
      header: item.firstName + ' ' + item.lastName,
    });
  }

  private showDetail(data: User) {
    this.ref = this.dialogService.open(UserDetailDialog, {
      width: '60vw',
      modal: true,
      breakpoints: BREAKPOINTS,
      data: data,
      dismissableMask: true,
      closable:true
    })!;
  }
}
