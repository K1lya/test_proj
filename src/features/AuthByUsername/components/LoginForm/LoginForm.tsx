import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThemeEnum } from 'shared/ui/Text/Text';
import {
  ReducerList,
  useDynamicReducer,
} from '../../../../shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import {
  loginByUsernameThunk,
} from '../../model/sevices/loginByUsername/loginByUsernameThunk';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {
  selectLoginUsername,
} from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import {
  selectLoginPassword,
} from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import {
  selectLoginError,
} from '../../model/selectors/selectLoginError/selectLoginError';
import {
  selectLoginIsLoading,
} from '../../model/selectors/selectLoginIsLodaing/selectLoginIsLoading';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  // consts
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Hooks
  useDynamicReducer(initialReducers, true);

  // Selectors
  const username = useSelector(selectLoginUsername);
  const password = useSelector(selectLoginPassword);
  const error = useSelector(selectLoginError);
  const isLoading = useSelector(selectLoginIsLoading);

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

export default LoginForm;
