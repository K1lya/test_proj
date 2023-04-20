import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface ISelectOpton {
  value: string;
  title: string;
}

interface SelectProps {
  options?: ISelectOpton[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  // consts
  const {
    className,
    label,
    options,
    value,
    onChange,
    disabled,
  } = props;

  // memo
  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      key={opt.value}
      value={opt.value}
    >
      {opt.title}
    </option>
  )), [options]);

  // Handler
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.Select}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
      >
        {optionsList}
      </select>
    </div>
  );
});
