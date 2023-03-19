import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  // consts
  const { className } = props;
  const { t } = useTranslation();

  //
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        title={t('Имя')}
        autofocus
      />
      <Input
        type="text"
        className={cls.input}
        title={t('Пароль')}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonThemeEnum.BACKGROUND_INVERTED}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
