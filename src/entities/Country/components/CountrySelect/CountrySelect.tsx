import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CountryEnum } from '../../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  disabled?: boolean;
}

const countryOptions = Object.entries(CountryEnum)
  .map(([key]): ISelectOption => ({ title: key, value: key }));

export const CountrySelect: FC<CountrySelectProps> = (props) => {
  // consts
  const {
    className,
    value,
    onChange,
    disabled,
  } = props;

  // Hooks
  const { t } = useTranslation();

  // Handlers
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CountryEnum);
  }, [onChange]);
  return (
    <Select
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      value={value}
      options={countryOptions}
      label={t('Ваша страна')}
      disabled={disabled}
    />
  );
};
