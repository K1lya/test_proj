import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/DarkTheme.svg';
import LightIcon from 'shared/assets/icons/LightTheme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  // consts
  const { className } = props;
  // States
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames('', {}, [className, cls.buttonHeight])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK
        ? (
          <DarkIcon
            width="30px"
            height="30px"
          />
        )
        : (
          <LightIcon
            width="30px"
            height="30px"
          />
        )}
    </Button>
  );
};
