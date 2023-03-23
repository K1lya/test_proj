import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Text, TextThemeEnum } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
  onSuccess?: () => void;
 }

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
  // consts
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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

  const onClickButtonHandler = useCallback(async () => {
    const result = await dispatch(loginByUsernameThunk({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

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
