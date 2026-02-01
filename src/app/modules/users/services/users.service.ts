import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiListResponse, ApiResponse, buildHttpParams } from '../../../core/commons/api.utils';
import { User } from '../models/users.model';

@Injectable()
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.api.baseUrl;
  private readonly PATH = 'users';

  getAll(queryParams: any): Observable<ApiListResponse<User>> {
    const params = buildHttpParams(queryParams);
    return this.http.get<ApiListResponse<User>>(`${this.API_URL}/${this.PATH}`, {
      params,
    });
  }

  getById(id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`);
  }

  create(user: Partial<User>): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.API_URL}/${this.PATH}`, user);
  }

  update(id: number, user: User): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`, user);
  }

  patch(id: number, changes: Partial<User>): Observable<ApiResponse<User>> {
    return this.http.patch<ApiResponse<User>>(`${this.API_URL}/${this.PATH}/${id}`, changes);
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.API_URL}/${this.PATH}/${id}`);
  }
}
