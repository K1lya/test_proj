import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonThemeEnum {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'

}

export enum ButtonSizeEnum {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonThemeEnum;
  square?: boolean;
  size?: ButtonSizeEnum;
}

export const Button: FC<ButtonProps> = (props) => {
  // consts
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSizeEnum.M,
    ...others
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...others}
    >
      {children}
    </button>
  );
};
