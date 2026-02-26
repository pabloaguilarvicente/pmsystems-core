import { RouteFiltersState } from '../components/app-filters/app-filters.model';
import { ColorScheme, Language, MenuMode, MenuProfilePosition } from '../layout/service/layout.service';

export const Order = {
  Asc: 'asc',
  Desc: 'desc',
} as const;
export type Order = (typeof Order)[keyof typeof Order];

export const Gender = {
  Male: 'MALE',
  Female: 'FEMALE',
  Other: 'OTHER',
  PreferNotToSay: 'PREFER_NOT_TO_SAY',
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export interface UiSettings {
  colorScheme: ColorScheme;
  menuMode: MenuMode;
  menuProfileMode: MenuProfilePosition;
  language: Language;
  primaryColor?: string;
}

export interface AppSettings {
  filters: RouteFiltersState;
  global: GlobalState;
}

export interface GlobalState {
  role: string;
  rememberMe: boolean | null;
}

export interface SelectModel {
  id: number | string;
  label: string;
  icon?: string;
}
