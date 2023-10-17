import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../slices/articlesPageSlice';
import {
  selectArticlesPageHasMore, selectArticlesPageIsLoading,
  selectArticlesPageNum,
} from '../selectors/articlesPageSelectors';
import { fetchArticlesListThunk } from './fetchArticlesListThunk';

export const fetchNextArticlePageThunk = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesList/fetchNextArticlePageThunk',
  async (_, thunkAPI) => {
    const {
      getState,
      dispatch,
    } = thunkAPI;

    const hasMore = selectArticlesPageHasMore(getState());
    const isLoading = selectArticlesPageIsLoading(getState());
    const page = selectArticlesPageNum(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesListThunk({ page: page + 1 }));
    }
  },
);
