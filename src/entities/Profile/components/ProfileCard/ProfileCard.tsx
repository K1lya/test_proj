import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
  selectProfileData,
} from '../../model/selectors/selectProfileData/selectProfileData';
import cls from './ProfileCard.module.scss';
import {
  selectProfileError,
} from '../../model/selectors/selectProfileError/selectProfileError';
import {
  selectProfileIsLoading,
} from '../../model/selectors/selectProfileIsLoading/selectProfileIsLoading';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  // consts
  const { className } = props;
  const { t } = useTranslation('profile');

  // Selectors
  const data = useSelector(selectProfileData);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button
          theme={ButtonThemeEnum.OUTLINE}
          className={cls.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          title={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          title={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
