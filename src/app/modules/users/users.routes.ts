import { Route } from '@angular/router';
import { UsersMain } from './pages/users-main/users-main';
import { UsersRegister } from './pages/users-register/users-register';
import { UsersUpdate } from './pages/users-update/users-update';

export default [
  { path: '', component: UsersMain, data: { breadcrumb: 'crud.main' } },
  { path: 'register', component: UsersRegister, data: { breadcrumb: 'crud.register' } },
  { path: 'update/:id', component: UsersUpdate, data: { breadcrumb: 'crud.update' } },
] satisfies Route[];
