import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/types';
import { ArticleSortFieldEnum } from 'entities/Article';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesListThunk } from './fetchArticlesListThunk';
import { selectArticlesPageInited } from '../selectors/articlesPageSelectors';

export const initArticlesPageThunk = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesList/initArticlesPageThunk',
  async (searchParams, thunkAPI) => {
    const {
      getState,
      dispatch,
    } = thunkAPI;

    const inited = selectArticlesPageInited(getState());

    if (!inited) {
      const order = searchParams.get('order');
      const sort = searchParams.get('sort');
      const search = searchParams.get('search');

      if (order) {
        dispatch(articlesPageActions.setOrder(order as SortOrder));
      }
      if (sort) {
        dispatch(articlesPageActions.setSort(sort as ArticleSortFieldEnum));
      }
      if (search) {
        dispatch(articlesPageActions.setSearch(search));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesListThunk({}));
    }
  },
);
