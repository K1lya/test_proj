import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducerList,
  useDynamicReducer,
} from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { profileReducer } from 'entities/Profile';
// import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  // consts
  const { className } = props;

  // Hooks
  useDynamicReducer(initialReducers, true);

  return (
    <div className={classNames('', {}, [className])}>
      1
    </div>
  );
});

export default ProfilePage;
