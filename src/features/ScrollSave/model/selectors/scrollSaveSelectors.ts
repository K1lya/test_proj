import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const selectScrollSaveScroll = (state: StateSchema) => state.scrollSave.scroll;

export const selectScrollSaveByPath = createSelector(
  selectScrollSaveScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
