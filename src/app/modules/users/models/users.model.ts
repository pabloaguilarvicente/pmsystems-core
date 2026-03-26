import { Order } from '../../../core/models/core.model';
import { UserProfile, UserRole, UserStatus } from '../../account/models/account.model';

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profile: Omit<UserProfile, 'address'>;
}

export interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profile: UserProfile;
}

export interface UserFiltersParams {
  role?: number[];
  status?: number;
  search?: string;
  currentPage: number;
  pageSize: number;
  sort?: string;
  order?: Order;
  startDate?: string | null;
  endDate?: string | null;
  date?: string | null;
  [key: string]: any;
}
