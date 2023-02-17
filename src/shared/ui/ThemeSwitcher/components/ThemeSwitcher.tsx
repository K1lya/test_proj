import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/DarkTheme.svg";
import LightIcon from "shared/assets/icons/LightTheme.svg";
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  // consts
  const {className} = props;
  // States
  const {theme, toggleTheme} = useTheme()
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className, cls.buttonHeight])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? <DarkIcon width="30px" height="30px" />
        : <LightIcon width="30px" height="30px"/>
      }
    </Button>
  );
};
