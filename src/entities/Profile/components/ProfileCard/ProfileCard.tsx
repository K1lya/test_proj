import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlignEnum, TextThemeEnum } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ValueOf } from 'shared/types/types';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { IProfile } from '../../model/types/ProfileSchema';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string
  onChangeData?: (profileDataKey: keyof IProfile, value: ValueOf<IProfile>) => void;
  readonly?: boolean
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  // consts
  const {
    className,
    data,
    isLoading,
    error,
    onChangeData,
    readonly,
  } = props;
  const { t } = useTranslation('profile');
  const mods: Mods = {
    [cls.edit]: !readonly,
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextThemeEnum.ERROR}
          title={t('Произошла ошибка')}
          align={TextAlignEnum.CENTER}
        >
          {t('Попробуйте обновить страницу')}
        </Text>
      </div>
    );
  }
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar
              src={data.avatar}
              alt="avatar"
              size={100}
            />
          </div>
        )}
        <Input
          value={data?.first}
          title={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('first', value)}
        />
        <Input
          value={data?.lastname}
          title={t('Ваша фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('lastname', value)}
        />
        <Input
          value={data?.age}
          type="number"
          title={t('Возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('age', value)}
        />
        <Input
          value={data?.city}
          title={t('Ваш город')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('city', value)}
        />
        <Input
          value={data?.username}
          title={t('Ваше имя пользователя')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('username', value)}
        />
        <Input
          value={data?.avatar}
          title={t('Ссылка на аватар')}
          className={cls.input}
          readonly={readonly}
          onChange={(value) => onChangeData?.('avatar', value)}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={(value) => onChangeData?.('currency', value)}
          disabled={readonly}
          className={cls.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={(value) => onChangeData?.('country', value)}
          disabled={readonly}
          className={cls.input}
        />
      </div>
    </div>
  );
};
