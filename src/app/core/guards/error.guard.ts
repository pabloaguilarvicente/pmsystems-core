import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const errorGuard: CanActivateFn = () => {
  const router = inject(Router);
  const navigation = router.currentNavigation();

  const hasErrorData = navigation?.extras?.state?.['error'];

  if (hasErrorData) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
