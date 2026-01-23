export type ColorScheme = 'light' | 'dark';
export type MenuMode =
  | 'static'
  | 'overlay'
  | 'slim-plus'
  | 'slim'
  | 'horizontal'
  | 'reveal'
  | 'drawer';
export type MenuProfileMode = 'start' | 'end';
export type Language = 'es' | 'en';

export interface AppSettings {
  colorScheme: ColorScheme;
  menuMode: MenuMode;
  menuProfileMode: MenuProfileMode;
  language: Language;
}
