import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';

export interface StateSchema {
counter: CounterSchema;
user: UserSchema;
// Async reducers
loginForm?: LoginSchema;
profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  // eslint-disable-next-line no-unused-vars
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  // eslint-disable-next-line no-unused-vars
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  // eslint-disable-next-line no-unused-vars
  remove: (key: StateSchemaKey) => void;

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance,
  // eslint-disable-next-line no-unused-vars
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
