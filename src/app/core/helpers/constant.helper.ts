import { Role, Status, UserGender, UserRole, UserStatus } from '../../modules/account/models/account.model';
import { Gender, SelectModel, Timezone } from '../models/core.model';

export const PRIMARY_COLOR: string = '#2563EB';
export const I18N_PATH: string = 'i18n/';
export const BREAKPOINTS = { '960px': '75vw', '640px': '90vw' };

export const PRESET_COLORS: string[] = [
  PRIMARY_COLOR,
  '#212121',
  '#1E40AF',
  '#16A34A',
  '#DC2626',
  '#D97706',
  '#7C3AED',
  '#DB2777',
  '#5BC0EB',
  '#84CC16',
];

export const VIEW_AS: SelectModel[] = [
  { id: 'LIST', label: 'viewAs.list', icon: 'ph-list' },
  { id: 'GRID', label: 'viewAs.grid', icon: 'ph-squares-four' },
];

export const ROLES: UserRole[] = [
  { id: 1, code: Role.Admin, name: 'Administrador' },
  { id: 2, code: Role.User, name: 'Usuario' },
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
  appearanceSettings: 'appearanceSettings',
  appSettings: 'appSettings',
  auth: 'auth',
} as const;

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export const TIMEZONES: Timezone[] = [
  { code: 'UTC', name: '(UTC+00:00) UTC' },

  { code: 'America/New_York', name: '(UTC-05:00) Nueva York' },
  { code: 'America/Chicago', name: '(UTC-06:00) Chicago' },
  { code: 'America/Los_Angeles', name: '(UTC-08:00) Los Ángeles' },
  { code: 'America/Mexico_City', name: '(UTC-06:00) Ciudad de México' },
  { code: 'America/Bogota', name: '(UTC-05:00) Bogotá' },
  { code: 'America/Lima', name: '(UTC-05:00) Lima' },
  { code: 'America/Santiago', name: '(UTC-03:00) Santiago' },
  { code: 'America/Buenos_Aires', name: '(UTC-03:00) Buenos Aires' },
  { code: 'America/Sao_Paulo', name: '(UTC-03:00) São Paulo' },

  { code: 'Europe/London', name: '(UTC+00:00) Londres' },
  { code: 'Europe/Madrid', name: '(UTC+01:00) Madrid' },
  { code: 'Europe/Paris', name: '(UTC+01:00) París' },
  { code: 'Europe/Berlin', name: '(UTC+01:00) Berlín' },
  { code: 'Europe/Moscow', name: '(UTC+03:00) Moscú' },

  { code: 'Asia/Dubai', name: '(UTC+04:00) Dubái' },
  { code: 'Asia/Kolkata', name: '(UTC+05:30) Kolkata' },
  { code: 'Asia/Shanghai', name: '(UTC+08:00) Shanghái' },
  { code: 'Asia/Singapore', name: '(UTC+08:00) Singapur' },
  { code: 'Asia/Tokyo', name: '(UTC+09:00) Tokio' },

  { code: 'Australia/Sydney', name: '(UTC+10:00) Sídney' },
  { code: 'Pacific/Auckland', name: '(UTC+12:00) Auckland' },
];
