export type Role = 'ADMIN' | 'MODERATOR' | 'USER';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface UserStatus {
  id: number;
  code: Role;
  name: string;
  color: string;
}

export interface UserRole {
  id: number;
  code: Role;
  name: string;
  color: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
  status: boolean;
}

export interface UserFiltersParams {
  role?: UserRole;
  status?: boolean;
  search?: string;
  currentPage: number;
  pageSize: number;
  sort?: string;
  order?: 'asc' | 'desc';
}
