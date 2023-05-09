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
    let newTheme: ThemeEnum;
    switch (theme) {
      case ThemeEnum.DARK:
        newTheme = ThemeEnum.LIGHT;
        break;
      case ThemeEnum.LIGHT:
        newTheme = ThemeEnum.COLOR;
        break;
      case ThemeEnum.COLOR:
        newTheme = ThemeEnum.DARK;
        break;
      default:
        newTheme = ThemeEnum.DARK;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || ThemeEnum.DARK,
    toggleTheme,
  };
}
