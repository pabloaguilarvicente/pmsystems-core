import { RouteFiltersState } from '../components/app-filters/app-filters.model';
import {
  ColorScheme,
  Language,
  MenuMode,
  MenuProfilePosition,
} from '../layout/service/layout.service';

export const Order = {
  Asc: 'asc',
  Desc: 'desc',
} as const;
export type Order = (typeof Order)[keyof typeof Order];

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
