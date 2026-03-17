import { Route } from '@angular/router';
import { AccountMain } from './pages/account-main/account-main';

export default [{ path: '', component: AccountMain, data: { breadcrumb: 'account.label' } }] satisfies Route[];
