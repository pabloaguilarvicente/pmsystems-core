import { Route } from '@angular/router';
import { AuthLogin } from './pages/auth-login/auth-login';

export default [
  { path: 'login', component: AuthLogin },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
] satisfies Route[];
