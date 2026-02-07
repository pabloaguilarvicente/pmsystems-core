export const I18N_PATH: string = 'i18n/';
export const ERROR_IMAGE: string = 'images/error.svg';
export const NO_DATA_IMAGE: string = 'images/no-data.svg';
export const BREAKPOINTS = { '960px': '75vw', '640px': '90vw' };

export const LOCAL_STORAGE_KEYS = {
  appSettings: 'appSettings',
} as const;

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
