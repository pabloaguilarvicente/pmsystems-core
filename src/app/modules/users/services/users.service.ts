import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiListResponse, ApiResponse, buildHttpParams } from '../../../core/helpers/api.helper';
import { CreateUserRequest, UpdateUserRequest, User, UserFiltersParams } from '../models/users.model';
import { PROGRESS_BAR } from '../../../core/interceptors/progress-bar.interceptor';

@Injectable()
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.api.baseUrl;
  private readonly PATH = 'users';

  getAll(queryParams: UserFiltersParams): Observable<ApiListResponse<User>> {
    let params = buildHttpParams(queryParams);
    return this.http.get<ApiListResponse<User>>(`${this.API_URL}/${this.PATH}`, { params });
  }

  getById(id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`);
  }

  create(user: CreateUserRequest): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.API_URL}/${this.PATH}`, user);
  }

  update(id: number, user: UpdateUserRequest): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`, user);
  }

  patch(id: number, changes: Partial<User>): Observable<ApiResponse<User>> {
    return this.http.patch<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`, changes);
  }

  delete(id: number): Observable<ApiResponse<User>> {
    return this.http.delete<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`, {
      headers: { [PROGRESS_BAR]: 'false' },
    });
  }
}
