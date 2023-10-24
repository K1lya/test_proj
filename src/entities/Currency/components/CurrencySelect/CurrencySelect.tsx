import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CurrencyEnum } from '../../model/types/Currency';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  disabled?: boolean;
}

const currencyOptions = Object.entries(CurrencyEnum)
  .map(([key]): ISelectOption => ({ title: key, value: key }));

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
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
    onChange?.(value as CurrencyEnum);
  }, [onChange]);
  return (
    <Select
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      value={value}
      options={currencyOptions}
      label={t('Ваша валюта')}
      disabled={disabled}
    />
  );
};
