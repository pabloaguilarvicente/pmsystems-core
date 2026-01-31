import {
  ColorScheme,
  Language,
  MenuMode,
  MenuProfilePosition,
} from '../layout/service/layout.service';

export interface AppSettings {
  colorScheme: ColorScheme;
  menuMode: MenuMode;
  menuProfileMode: MenuProfilePosition;
  language: Language;
}
