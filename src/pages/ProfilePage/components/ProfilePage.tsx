import { FC, memo, useEffect } from 'react';
import {
  ReducerList,
  useDynamicReducer,
} from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { ProfileCard, profileDataThunk, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  // consts
  const dispatch = useAppDispatch();

  // Hooks
  useDynamicReducer(initialReducers);

  // Effects
  useEffect(() => {
    dispatch(profileDataThunk());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
