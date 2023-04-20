import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
  // consts
  const {
    className,
    src,
    alt,
    size = 100,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  );
};
