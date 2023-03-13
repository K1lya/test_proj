import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeEnum, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as ThemeEnum || ThemeEnum.DARK;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
