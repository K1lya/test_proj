import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  // consts
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  // Hooks
  const { theme } = useTheme();

  // States
  const [isMounted, setIsMounted] = useState(false);

  // Mods
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

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onContentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  //

  if (lazy && !isMounted) {
    return null;
  }

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
