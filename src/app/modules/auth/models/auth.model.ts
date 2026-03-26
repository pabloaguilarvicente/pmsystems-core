import { Role } from '../../account/models/account.model';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
  role: Role;
}
