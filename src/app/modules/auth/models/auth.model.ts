import { Role, User } from '../../account/models/account.model';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
  role: Role;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  user: User;
}
