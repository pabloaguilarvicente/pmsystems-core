export type ColorScheme = 'light' | 'dark';
export type MenuMode =
  | 'static'
  | 'overlay'
  | 'slim-plus'
  | 'slim'
  | 'horizontal'
  | 'reveal'
  | 'drawer';
export type MenuProfilePosition = 'start' | 'end';
export type Language = 'es' | 'en';

export interface AppSettings {
  colorScheme: ColorScheme;
  menuMode: MenuMode;
  menuProfileMode: MenuProfilePosition;
  language: Language;
}
