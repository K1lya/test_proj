import { createSelector } from '@reduxjs/toolkit';
import { selectCounter } from '../selectCounter/selectCounter';

export const selectCounterValue = createSelector(
  selectCounter,
  (counter) => counter.value,
);
