import { withInterceptors } from '@angular/common/http';
import { progressBarInterceptor } from '../interceptors/progress-bar.interceptor';

export const PROVIDE_INTERCEPTORS = withInterceptors([progressBarInterceptor]);
