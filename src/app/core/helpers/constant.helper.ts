import {
  Gender,
  Role,
  Status,
  UserGender,
  UserRole,
  UserStatus,
} from '../../modules/users/models/users.model';
import { SelectModel } from '../models/core.model';

export const PRIMARY_COLOR: string = '#000f85';
export const I18N_PATH: string = 'i18n/';
export const BREAKPOINTS = { '960px': '75vw', '640px': '90vw' };

export const PRESET_COLORS: string[] = [
  PRIMARY_COLOR,
  '#212121',   
  '#2563EB',   
  '#16A34A',   
  '#DC2626',   
  '#D97706',   
  '#7C3AED',   
  '#DB2777',   
  '#0891B2',   
  '#84CC16',   
];

export const VIEW_AS: SelectModel[] = [
  { id: 'LIST', label: 'viewAs.list', icon: 'ph-list' },
  { id: 'GRID', label: 'viewAs.grid', icon: 'ph-squares-four' },
];

export const ROLES: UserRole[] = [
  { id: 1, code: Role.Admin, name: 'Administrador' },
  { id: 2, code: Role.Moderator, name: 'Moderador' },
  { id: 3, code: Role.User, name: 'Usuario' },
];

export const STATUS: UserStatus[] = [
  { id: 1, code: Status.Active, name: 'Activo' },
  { id: 2, code: Status.Inactive, name: 'Inactivo' },
];

export const GENDERS: UserGender[] = [
  { id: 1, code: Gender.Male, name: 'Masculino' },
  { id: 2, code: Gender.Female, name: 'Femenino' },
  { id: 2, code: Gender.Other, name: 'Otro' },
  { id: 2, code: Gender.PreferNotToSay, name: 'Prefiero no decirlo' },
];

export const LOCAL_STORAGE_KEYS = {
  uiSettings: 'uiSettings',
  appSettings: 'appSettings',
} as const;

export type LocalStorageKey =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
