import { HttpInterceptorFn } from '@angular/common/http';
import { ProgressBarService } from '../services/progress-bar.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const PROGRESS_BAR: string = 'X-Progress-Bar';

export const progressBarInterceptor: HttpInterceptorFn = (req, next) => {
  const progressBarService = inject(ProgressBarService);

  const showProgressBar = req.headers.get(PROGRESS_BAR) === 'true';

  const cleanReq = showProgressBar ? req.clone({ headers: req.headers.delete(PROGRESS_BAR) }) : req;

  if (showProgressBar) {
    progressBarService.show();
  }

  return next(cleanReq).pipe(
    finalize(() => {
      if (showProgressBar) {
        progressBarService.hide();
      }
    }),
  );
};
