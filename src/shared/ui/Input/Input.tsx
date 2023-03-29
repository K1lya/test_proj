import React, {
  FC,
  InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  title?: string;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  // consts
  const {
    className,
    value,
    onChange,
    type = 'text',
    title,
    autofocus,
    ...otherProps
  } = props;

  // States
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  // Hooks
  const ref = useRef<HTMLInputElement>(null);

  // Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onSelectHandler = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(event.currentTarget.selectionStart || 0);
  };

  // Effects
  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {title && (
      <div className={cls.placeholder}>
        {`${title}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onSelect={onSelectHandler}
          {...otherProps}
        />
        {isFocused && (
        <span
          className={cls.caret}
          style={{ left: `${caretPosition * 8.8}px` }}
        />
        )}
      </div>
    </div>
  );
});
