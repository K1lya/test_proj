import {
  FC,
  memo,
  useCallback,
  useEffect,
} from 'react';
import {
  ReducerList,
  useDynamicReducer,
} from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import {
  IProfile,
  profileActions,
  ProfileCard,
  fetchProfileDataThunk,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadonly,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ValueOf } from 'shared/types/types';
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

  // Selectors
  const formData = useSelector(selectProfileForm);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);
  const readonly = useSelector(selectProfileReadonly);

  // Hooks
  useDynamicReducer(initialReducers);

  // Effects
  useEffect(() => {
    dispatch(fetchProfileDataThunk());
  }, [dispatch]);

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
    <div>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeData={changeProfileDataHandler}
        readonly={readonly}
      />
    </div>
  );
});

export default ProfilePage;
