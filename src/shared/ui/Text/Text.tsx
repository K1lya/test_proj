import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemeEnum {
  // eslint-disable-next-line no-unused-vars
  PRIMARY = 'primary',
  // eslint-disable-next-line no-unused-vars
  ERROR = 'error',
}

export enum TextAlignEnum {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  theme?: TextThemeEnum;
  align?: TextAlignEnum;
}

export const Text: FC<TextProps> = memo((props) => {
  // consts
  const {
    className,
    children,
    title,
    theme = TextThemeEnum.PRIMARY,
    align = TextAlignEnum.LEFT,
  } = props;
  return (
    <div className={classNames('', {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {children && <p className={cls.text}>{children}</p>}
    </div>
  );
});
