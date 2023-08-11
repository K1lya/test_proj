import { CSSProperties, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  border?: string;
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  // consts
  const {
    className,
    height,
    width,
    border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  );
});
