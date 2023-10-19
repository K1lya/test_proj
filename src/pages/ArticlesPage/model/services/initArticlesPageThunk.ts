import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesListThunk } from './fetchArticlesListThunk';
import { selectArticlesPageInited } from '../selectors/articlesPageSelectors';

export const initArticlesPageThunk = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesList/initArticlesPageThunk',
  async (_, thunkAPI) => {
    const {
      getState,
      dispatch,
    } = thunkAPI;

    const inited = selectArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesListThunk({ page: 1 }));
    }
  },
);
