import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
counter: CounterSchema;
user: UserSchema;
// Async reducers
loginForm?: LoginSchema;
profile?: ProfileSchema;
articleDetails?: ArticleDetailsSchema;
articleDetailsComments?: ArticleDetailsCommentsSchema;
addNewComment?: AddNewCommentSchema;
articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducersType = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  // eslint-disable-next-line no-unused-vars
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  // eslint-disable-next-line no-unused-vars
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  // eslint-disable-next-line no-unused-vars
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducersType;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
