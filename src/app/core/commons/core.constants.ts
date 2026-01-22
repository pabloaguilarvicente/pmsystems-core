export const LOCAL_STORAGE_KEYS = {
  themeSettings: 'themeSettings',
} as const;

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
