import { Order, UiSettings } from '../../../core/models/core.model';

export const Role = {
  Admin: 'ADMIN',
  Moderator: 'MODERATOR',
  User: 'USER',
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const Status = {
  Active: 'ACTIVE',
  Inactive: 'INACTIVE',
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export const Gender = {
  Male: 'MALE',
  Female: 'FEMALE',
  Other: 'OTHER',
  PreferNotToSay: 'PREFER_NOT_TO_SAY',
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  profile: UserProfile;
  preferences: UserPreferences;
  security: UserSecurity;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface UserProfile {
  picture: File | string;
  birthDate: string;
  gender: Gender;
  phone: string;
  bio: string;
  address: UserAddress;
}

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface UserPreferences {
  timezone: string;
  ui: UiSettings;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
}

export interface UserSecurity {
  emailVerified: boolean;
  phoneVerified: boolean;
  twoFactorEnabled: boolean;
  lastLoginAt: string;
  lastLoginIp: string;
  passwordChangedAt: string;
  failedLoginAttempts: number;
  lockedUntil: string;
}

export interface UserStatus {
  id: number;
  code: Status;
  name: string;
}

export interface UserRole {
  id: number;
  code: Role;
  name: string;
}

export interface UserGender {
  id: number;
  code: Gender;
  name: string;
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
