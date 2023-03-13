import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkThemeEnum {
  // eslint-disable-next-line no-unused-vars
  PRIMARY = 'primary',
  // eslint-disable-next-line no-unused-vars
  SECONDARY = 'secondary',
  // eslint-disable-next-line no-unused-vars
  RED = 'red',
}

interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkThemeEnum;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  // consts
  const {
    className,
    children,
    to,
    theme = AppLinkThemeEnum.PRIMARY,
    ...others
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...others}
    >
      {children}
    </Link>
  );
};
