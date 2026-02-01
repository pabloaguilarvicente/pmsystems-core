import { HttpParams } from '@angular/common/http';

export interface ApiListResponse<T> {
  data: T[];
  pagination?: Pagination;
  meta?: MetaData;
}
export interface ApiResponse<T> {
  data: T;
  message?: string;
  meta?: MetaData;
}
export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface MetaData {
  timestamp?: string;
  requestId?: string;
  version?: string;
}

export function buildHttpParams(params: Record<string, any>): HttpParams {
  let httpParams = new HttpParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];

    if (value !== undefined && value !== null) {
      httpParams = httpParams.set(key, value.toString());
    }
  });

  return httpParams;
}
