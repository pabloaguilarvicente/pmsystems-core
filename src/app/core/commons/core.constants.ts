export const I18N_PATH: string = '/i18n/';

export const LOCAL_STORAGE_KEYS = {
  appSettings: 'appSettings',
} as const;

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
