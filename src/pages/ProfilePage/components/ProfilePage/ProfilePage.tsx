import {
  FC, memo, useCallback,
} from 'react';
import {
  ReducerList,
  useDynamicReducer,
} from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import {
  fetchProfileDataThunk,
  IProfile,
  profileActions,
  ProfileCard,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadonly,
  selectProfileValidateErrors,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ValueOf } from 'shared/types/types';
import { Text, TextThemeEnum } from 'shared/ui/Text/Text';
import { ValidateProfileErrorsEnum } from 'entities/Profile/model/types/ProfileSchema';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(() => {
  // consts
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{id: string}>();

  // Selectors
  const formData = useSelector(selectProfileForm);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);
  const readonly = useSelector(selectProfileReadonly);
  const validateErrors = useSelector(selectProfileValidateErrors);

  // Helpers
  const validateErrorsTranslate = {
    [ValidateProfileErrorsEnum.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileErrorsEnum.INCORRECT_COUNTRY]: t('Ошибка страны'),
    [ValidateProfileErrorsEnum.INCORRECT_AGE]: t('Неверный возраст'),
    [ValidateProfileErrorsEnum.INCORRECT_USER_DATA]: t('Ошибка имени и фамилии'),
    [ValidateProfileErrorsEnum.NO_DATA]: t('Нет данных'),
  };

  // Hooks
  useDynamicReducer(initialReducers);

  // Effects
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileDataThunk(id));
    }
  });

  // Handlers
  // eslint-disable-next-line max-len
  const changeProfileDataHandler = useCallback((profileDataKey: keyof IProfile, value: ValueOf<IProfile>) => {
    let defaultValue: string | number = '';

    if (profileDataKey === 'age') {
      value = Number(value);
      defaultValue = 0;
    }

    dispatch(profileActions.setProfile({ [profileDataKey]: value || defaultValue }));
  }, [dispatch]);

  return (
    <Page>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map((err) => (
        <Text
          key={err}
          theme={TextThemeEnum.ERROR}
        >
          {validateErrorsTranslate[err]}
        </Text>
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeData={changeProfileDataHandler}
        readonly={readonly}
      />
    </Page>
  );
});

export default ProfilePage;
