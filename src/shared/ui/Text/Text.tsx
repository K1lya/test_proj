import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemeEnum {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  theme?: TextThemeEnum;
}

export const Text: FC<TextProps> = (props) => {
  // consts
  const {
    className,
    children,
    title,
    theme = TextThemeEnum.PRIMARY,
  } = props;
  return (
    <div className={classNames('', {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {children && <p className={cls.text}>{children}</p>}
    </div>
  );
};
