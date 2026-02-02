import { Component, effect, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserFiltersParams } from '../../models/users.model';
import { Pagination } from '../../../../core/commons/api.utils';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DatePipe } from '@angular/common';
import { AppPaginator, PaginatorChangeEvent } from '../../../../core/components/app-paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { getContrastColor, isTailwindColor } from '../../../../core/commons/color.utils';
import { AppTitlePage } from "../../../../core/components/app-title-page";
@Component({
  selector: 'users-main',
  imports: [
    TableModule,
    ButtonModule,
    TooltipModule,
    DatePipe,
    AppPaginator,
    TranslateModule,
    MenuModule,
    AppTitlePage
],
  templateUrl: './users-main.html',
  providers: [UsersService],
})
export class UsersMain {
  public readonly userService = inject(UsersService);

  public items: MenuItem[] = [
    { label: 'actions.update', icon: 'ph-bold ph-pencil-simple' },
    { label: 'actions.delete', icon: 'ph-bold ph-trash-simple' },
  ];

  public users = signal<User[]>([]);
  public pagination = signal<Pagination | undefined>(undefined);
  public isLoading = signal<boolean>(false);

  public filterParams = signal<UserFiltersParams>({
    currentPage: 1,
    pageSize: 5,
  });

  getAll(): void {
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

  private updateFiltersAndLoad(updates: Partial<UserFiltersParams>): void {
    this.filterParams.update((params) => ({
      ...params,
      ...updates,
    }));
    this.getAll();
  }

  public onSort(event: any): void {
    this.updateFiltersAndLoad({
      sort: event.sortField,
      order: event.sortOrder === 1 ? 'asc' : event.sortOrder === -1 ? 'desc' : undefined,
    });
  }

  public onPaginatorChange(event: PaginatorChangeEvent): void {
    this.updateFiltersAndLoad({
      currentPage: event.currentPage,
      pageSize: event.pageSize,
    });
  }

  getBgColor(color: string): { class?: string; style?: { [key: string]: string } } {
    if (isTailwindColor(color)) {
      return { class: `badge bg-${color}-200` };
    }

    return {
      class: 'badge',
      style: {
        'background-color': color,
        color: getContrastColor(color),
      },
    };
  }

  public getTextColor(bgColor: string): string {
    return getContrastColor(bgColor);
  }
}
