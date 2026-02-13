import { UserRole, UserStatus } from '../../modules/users/models/users.model';
import { SelectModel } from '../models/core.model';

export const I18N_PATH: string = 'i18n/';
export const ERROR_IMAGE: string = 'images/error.svg';
export const NO_DATA_IMAGE: string = 'images/no-data.svg';
export const BREAKPOINTS = { '960px': '75vw', '640px': '90vw' };

export const VIEW_AS: SelectModel[] = [
  { id: 'LIST', label: 'view_as.list', icon: 'ph-list' },
  { id: 'GRID', label: 'view_as.grid', icon: 'ph-squares-four' },
];

export const ROLES: UserRole[] = [
  { id: 1, code: 'ADMIN', name: 'Administrador' },
  { id: 2, code: 'MODERATOR', name: 'Moderador' },
  { id: 3, code: 'USER', name: 'Usuario' },
];

export const STATUS: UserStatus[] = [
  { id: 1, code: 'ACTIVE', name: 'Activo' },
  { id: 2, code: 'INACTIVE', name: 'Inactivo' },
];

export const LOCAL_STORAGE_KEYS = {
  uiSettings: 'uiSettings',
  appSettings: 'appSettings',
} as const;

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
