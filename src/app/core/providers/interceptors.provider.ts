import { withInterceptors } from '@angular/common/http';
import { progressBarInterceptor } from '../interceptors/progress-bar.interceptor';
import { errorInterceptor } from '../interceptors/error.interceptor';

export const PROVIDE_INTERCEPTORS = withInterceptors([progressBarInterceptor, errorInterceptor]);
