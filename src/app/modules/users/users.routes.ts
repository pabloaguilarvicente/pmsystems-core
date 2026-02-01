import { Route } from '@angular/router';
import { UsersMain } from './pages/users-main/users-main';
import { UserDetail } from './pages/user-detail/user-detail';

export default [
  { path: '', component: UsersMain, data: { breadcrumb: 'users.label' } },
  { path: 'detail/:id', component: UserDetail, data: { breadcrumb: 'users.label' } },
] satisfies Route[];
