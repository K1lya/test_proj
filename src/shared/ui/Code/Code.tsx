import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import CopyImg from 'shared/assets/icons/Copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: string;
}

export const Code = memo((props: CodeProps) => {
  // consts
  const { className, children } = props;

  const onCopyHandler = useCallback(() => {
    navigator.clipboard.writeText(children);
  }, [children]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonThemeEnum.CLEAR}
        onClick={onCopyHandler}
      >
        <CopyImg className={cls.copyIcon} />
      </Button>
      <code>
        {children}
      </code>
    </pre>

  );
});
