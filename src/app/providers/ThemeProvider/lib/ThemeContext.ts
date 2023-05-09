import { createContext } from 'react';

export enum ThemeEnum {
  // eslint-disable-next-line no-unused-vars
  DARK = 'app_dark_theme',
  // eslint-disable-next-line no-unused-vars
  LIGHT = 'app_light_theme',
  // eslint-disable-next-line no-unused-vars
  COLOR = 'app_color_theme',
}

export interface ThemeContextProps {
  theme?: ThemeEnum;
  // eslint-disable-next-line no-unused-vars
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
