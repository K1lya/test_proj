import { createContext } from 'react';

export enum ThemeEnum {
  // eslint-disable-next-line no-unused-vars
  DARK = 'dark',
  // eslint-disable-next-line no-unused-vars
  LIGHT = 'light',
}

export interface ThemeContextProps {
  theme?: ThemeEnum;
  // eslint-disable-next-line no-unused-vars
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
