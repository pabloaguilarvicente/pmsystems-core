import { HttpInterceptorFn } from '@angular/common/http';
import { ProgressBarService } from '../services/progress-bar.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const PROGRESS_BAR: string = 'X-Progress-Bar';

export const progressBarInterceptor: HttpInterceptorFn = (req, next) => {
  const progressBarService = inject(ProgressBarService);

  const hideProgressBar = req.headers.get(PROGRESS_BAR) === 'false';

  const cleanReq = req.clone({ headers: req.headers.delete(PROGRESS_BAR) });

  if (!hideProgressBar) {
    progressBarService.show();
  }

  return next(cleanReq).pipe(
    finalize(() => {
      if (!hideProgressBar) {
        progressBarService.hide();
      }
    }),
  );
};
