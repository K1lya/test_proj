import React, { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  // consts
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  // Hooks
  const { theme } = useTheme();

  const modalMods: Record<string, boolean> = {
    [cls.openedModal]: isOpen,
    [cls.closedModal]: !isOpen,
  };

  const contentMods: Record<string, boolean> = {
    [cls.openContent]: isOpen,
    [cls.closedContent]: !isOpen,
  };

  // Handlers
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Effects
  useEffect(() => {
    const onPressEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onPressEsc);
    }

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [isOpen, closeHandler]);

  const onContentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, modalMods, [className, theme, 'app_modal'])}>
        <div
          className={cls.overlay}
          onClick={closeHandler}
        >
          <div
            className={classNames(cls.content, contentMods)}
            onClick={(e) => onContentClickHandler(e)}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
