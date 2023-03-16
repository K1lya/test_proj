import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  selectCounterValue,
} from '../model/selectors/selectCounterValue/selectCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = () => {
  // consts
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Selectors
  const counterValue = useSelector(selectCounterValue);

  // Handlers
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={incrementHandler}
      >
        {t('Инкремент')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrementHandler}
      >
        {t('Декремент')}
      </Button>
    </div>
  );
};
