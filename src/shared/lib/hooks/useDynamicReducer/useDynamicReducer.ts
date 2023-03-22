import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [key in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

export const useDynamicReducer = (
  reducers: ReducerList,
  removeAfterUnmount?: boolean,
) => {
  // consts
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducerListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@REMOVE ${key} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
};
