import { Component, effect, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users.model';
import { Pagination } from '../../../../core/commons/api.utils';

@Component({
  selector: 'users-main',
  imports: [],
  templateUrl: './users-main.html',
  providers: [UsersService],
})
export class UsersMain {
  public users = signal<User[]>([]);
  public pagination = signal<Pagination | undefined>(undefined);
  public isLoading = signal<boolean>(false);
  public error = signal<string | null>(null);

  public currentPage = signal<number>(1);
  public pageSize = signal<number>(10);

  constructor(private userService: UsersService) {
    effect(() => {
      const page = this.currentPage();
      const size = this.pageSize();
      this.getAll();
    });
  }

  public ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    // this.isLoading.set(true);
    // this.error.set(null);
    // this.userService.getAll({}).subscribe({
    //   next: (response) => {
    //     this.users.set(response.data);
    //     this.pagination.set(response.pagination);
    //     this.isLoading.set(false);
    //   },
    //   error: (err) => {
    //     this.error.set(err.error.message);
    //   },
    // });
  }

  public nextPage(): void {
    if (this.pagination()?.hasNextPage) {
      this.currentPage.update((page) => page + 1);
    }
  }

  public previousPage(): void {
    if (this.pagination()?.hasPreviousPage) {
      this.currentPage.update((page) => page - 1);
    }
  }

  public changePageSize(size: number): void {
    this.pageSize.set(size);
    this.currentPage.set(1);
  }
}
