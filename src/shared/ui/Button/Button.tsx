import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonThemeEnum {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  // eslint-disable-next-line no-unused-vars
  CLEAR_INVERTED = 'clearInverted',
  // eslint-disable-next-line no-unused-vars
  OUTLINE = 'outline',
  // eslint-disable-next-line no-unused-vars
  BACKGROUND = 'background',
  // eslint-disable-next-line no-unused-vars
  BACKGROUND_INVERTED = 'backgroundInverted'

}

export enum ButtonSizeEnum {
  // eslint-disable-next-line no-unused-vars
  M = 'size_m',
  // eslint-disable-next-line no-unused-vars
  L = 'size_l',
  // eslint-disable-next-line no-unused-vars
  XL = 'size_xl',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonThemeEnum;
  square?: boolean;
  size?: ButtonSizeEnum;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  // consts
  const {
    className,
    children,
    theme = ButtonThemeEnum.OUTLINE,
    square,
    size = ButtonSizeEnum.M,
    disabled,
    ...others
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
});
