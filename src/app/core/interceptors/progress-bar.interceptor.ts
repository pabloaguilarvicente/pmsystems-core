import { HttpInterceptorFn } from '@angular/common/http';
import { ProgressBarService } from '../services/progress-bar.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
export const HEADER_PROGRESS_BAR: string = 'X-Skip-Progress-Bar';

export const progressBarInterceptor: HttpInterceptorFn = (req, next) => {
  const progressBarService = inject(ProgressBarService);

  const skipProgressBar = req.headers.has(HEADER_PROGRESS_BAR);

  let cleanReq = req;
  if (skipProgressBar) {
    cleanReq = req.clone({
      headers: req.headers.delete(HEADER_PROGRESS_BAR),
    });
  }

  if (!skipProgressBar) {
    progressBarService.show();
  }

  return next(cleanReq).pipe(
    finalize(() => {
      if (!skipProgressBar) {
        progressBarService.hide();
      }
    }),
  );
};
