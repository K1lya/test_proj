import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemeEnum {
  // eslint-disable-next-line no-unused-vars
  PRIMARY = 'primary',
  // eslint-disable-next-line no-unused-vars
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  theme?: TextThemeEnum;
}

export const Text: FC<TextProps> = memo((props) => {
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
});
