import { UserRole, UserStatus } from '../../modules/users/models/users.model';
import { ColorOption, SelectModel } from '../models/core.model';

export const PRIMARY_COLOR: string = '#000f85';
export const I18N_PATH: string = 'i18n/';
export const BREAKPOINTS = { '960px': '75vw', '640px': '90vw' };

export const PRESET_COLORS: ColorOption[] = [
  { label: 'Primary', value: PRIMARY_COLOR },
  { label: 'Graphite', value: '#212121' },
  { label: 'Cyan', value: '#00ACC1' },
  { label: 'Amber', value: '#F9A825' },
  { label: 'Crimson', value: '#C62828' },
  { label: 'Mint', value: '#66BB6A' },
  { label: 'Soft Violet', value: '#7E57C2' },
];

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
