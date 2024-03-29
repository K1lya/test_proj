import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  profileActions, selectProfileData,
  selectProfileReadonly,
  updateProfileDataThunk,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { selectUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  // consts
  const { className } = props;
  const dispatch = useAppDispatch();

  // Selectors
  const authData = useSelector(selectUserAuthData);
  const profileData = useSelector(selectProfileData);
  const readonly = useSelector(selectProfileReadonly);

  const canEdit = authData?.id === profileData?.id;

  // hooks
  const { t } = useTranslation('profile');

  // Handlers
  const onEditButtonClick = useCallback((isReadonly: boolean) => {
    if (isReadonly) {
      dispatch(profileActions.cancelEdit());
      return;
    }
    dispatch(profileActions.setReadonly(isReadonly));
  }, [dispatch]);

  const onSaveButtonClick = useCallback(() => {
    dispatch(updateProfileDataThunk());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <Button
              theme={ButtonThemeEnum.OUTLINE}
              className={cls.editBtn}
              onClick={() => onEditButtonClick(false)}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonThemeEnum.OUTLINE_RED}
                className={cls.editBtn}
                onClick={() => onEditButtonClick(true)}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme={ButtonThemeEnum.OUTLINE}
                className={cls.saveBtn}
                onClick={onSaveButtonClick}
              >
                {t('Сохранить')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
