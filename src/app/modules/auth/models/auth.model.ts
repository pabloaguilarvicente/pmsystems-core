import { Role } from '../../users/models/users.model';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
  role: Role;
}
