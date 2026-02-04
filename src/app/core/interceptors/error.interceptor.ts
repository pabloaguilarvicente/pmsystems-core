import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ErrorData } from '../components/error-page';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorData: ErrorData = {
        title: getErrorTitle(error.status),
        description: getErrorDescription(error),
        code: `ERROR_${error.status}`,
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url || req.url,
        timestamp: new Date().toISOString(),
      };

      router.navigate(['/error'], {
        state: { error: errorData },
      });

      return throwError(() => error);
    }),
  );
};

function getErrorTitle(status: number): string {
  const titles: { [key: number]: string } = {
    400: 'errors.titles.400',
    401: 'errors.titles.401',
    403: 'errors.titles.403',
    404: 'errors.titles.404',
    408: 'errors.titles.408',
    409: 'errors.titles.409',
    422: 'errors.titles.422',
    429: 'errors.titles.429',
    500: 'errors.titles.500',
    502: 'errors.titles.502',
    503: 'errors.titles.503',
    504: 'errors.titles.504',
  };

  return titles[status] || 'errors.titles.default';
}

function getErrorDescription(error: HttpErrorResponse): string {
  if (error.error?.message) {
    return error.error.message;
  }

  const descriptions: { [key: number]: string } = {
    400: 'errors.descriptions.400',
    401: 'errors.descriptions.401',
    403: 'errors.descriptions.403',
    404: 'errors.descriptions.404',
    408: 'errors.descriptions.408',
    409: 'errors.descriptions.409',
    422: 'errors.descriptions.422',
    429: 'errors.descriptions.429',
    500: 'errors.descriptions.500',
    502: 'errors.descriptions.502',
    503: 'errors.descriptions.503',
    504: 'errors.descriptions.504',
  };

  return descriptions[error.status] || 'errors.descriptions.default';
}
