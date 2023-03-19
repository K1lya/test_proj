import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  // consts
  const { className } = props;

  // States
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hooks
  const { t } = useTranslation();

  // Handlers
  const onCloseModalHandler = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onShowModalHandler = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonThemeEnum.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModalHandler}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isModalOpen}
        onClose={onCloseModalHandler}
      />
    </div>
  );
};
