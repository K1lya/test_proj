import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeEnum,
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

export interface IUseThemeResult {
  toggleTheme: () => void;
  theme: ThemeEnum;
}

export function useTheme(): IUseThemeResult {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || ThemeEnum.DARK,
    toggleTheme,
  };
}
