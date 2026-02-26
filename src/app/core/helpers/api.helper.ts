import { HttpParams } from '@angular/common/http';

export interface ApiListResponse<T> {
  data: T[];
  pagination: Pagination;
  meta: MetaData;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  meta: MetaData;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  restoreParams?: boolean;
}

export interface MetaData {
  timestamp: string;
  requestId: string;
  version: string;
}

export interface ErrorData {
  title: string;
  description: string;
  code: string;
  status: number;
  statusText: string;
  message: string;
  url: string;
  timestamp: string;
}

export function buildHttpParams<T extends object>(params: T): HttpParams {
  let httpParams = new HttpParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          httpParams = httpParams.append(key, String(item));
        }
      });
    } else {
      httpParams = httpParams.set(key, String(value));
    }
  });

  return httpParams;
}
