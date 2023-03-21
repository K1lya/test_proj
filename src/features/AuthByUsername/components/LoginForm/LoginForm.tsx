import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThemeEnum } from 'shared/ui/Text/Text';
import {
  loginByUsernameThunk,
} from '../../model/sevices/loginByUsername/loginByUsernameThunk';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {
  selectLoginState,
} from '../../model/selectors/selectLoginState/selectLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  // consts
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Selectors
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(selectLoginState);

  // Handlers
  const onChangeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickButtonHandler = useCallback(() => {
    dispatch(loginByUsernameThunk({ username, password }));
  }, [dispatch, password, username]);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
      <Text theme={TextThemeEnum.ERROR}>
        {t('Неправильный логин или пароль')}
      </Text>
      )}
      <Input
        type="text"
        className={cls.input}
        title={t('Имя')}
        autofocus
        onChange={onChangeUsernameHandler}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        title={t('Пароль')}
        onChange={onChangePasswordHandler}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonThemeEnum.OUTLINE}
        onClick={onClickButtonHandler}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
