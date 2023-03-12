import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  // eslint-disable-next-line no-unused-vars
  CLEAR = 'clear',
  OUTLINE = 'outline'

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  // consts
  const {
    className,
    children,
    theme,
    ...others
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...others}
    >
      {children}
    </button>
  );
};
