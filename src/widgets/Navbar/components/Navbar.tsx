import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  // consts
  const { className } = props;

  // States
  const [isAuth, setIsAuth] = useState(false);

  // Hooks
  const { t } = useTranslation();

  // Handlers
  const onToggleAuthHandler = useCallback(() => {
    setIsAuth((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonThemeEnum.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleAuthHandler}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuth}
        onClose={onToggleAuthHandler}
      >
        123
      </Modal>
    </div>
  );
};
