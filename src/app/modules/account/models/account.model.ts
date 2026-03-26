import { AppearanceSettings, Gender } from '../../../core/models/core.model';

export const Role = {
  Admin: 'ADMIN',
  User: 'USER',
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const Status = {
  Active: 'ACTIVE',
  Inactive: 'INACTIVE',
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface UserProfile {
  picture: Picture;
  birthDate: string;
  gender: UserGender;
  phone: string;
  bio: string;
  address: UserAddress;
}

export interface Picture {
  url: string;
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

export interface Account {
  user: User;
  preferences: UserPreferences;
  appearance: AppearanceSettings;
  security: UserSecurity;
}
