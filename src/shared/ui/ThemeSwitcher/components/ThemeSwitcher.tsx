import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/DarkTheme.svg';
import LightIcon from 'shared/assets/icons/LightTheme.svg';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
  // consts
  // eslint-disable-next-line react/prop-types
  const { className } = props;
  // States
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames('', {}, [className, cls.buttonHeight])}
      onClick={toggleTheme}
      theme={ButtonThemeEnum.CLEAR}
    >
      {theme === ThemeEnum.DARK
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
});
