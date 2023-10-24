import { ArticleTypeEnum, IArticle } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import {
  selectArticlesPageLimit,
  selectArticlesPageNum,
  selectArticlesPageOrder,
  selectArticlesPageSearch,
  selectArticlesPageSort,
  selectArticlesPageType,
} from '../selectors/articlesPageSelectors';

interface fetchArticlesListThunkProps {
  replace?: boolean;
}

export const fetchArticlesListThunk = createAsyncThunk<
  IArticle[],
  fetchArticlesListThunkProps,
  ThunkConfig<string>
  >(
    'articlesList/fetchArticlesListThunk',
    async (_, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkAPI;

      const limit = selectArticlesPageLimit(getState());
      const sort = selectArticlesPageSort(getState());
      const order = selectArticlesPageOrder(getState());
      const search = selectArticlesPageSearch(getState());
      const page = selectArticlesPageNum(getState());
      const type = selectArticlesPageType(getState());

      try {
        addQueryParams({
          sort, order, search, type,
        });
        const response = await extra.api.get<IArticle[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            type: type === ArticleTypeEnum.ALL ? undefined : type,
            q: search,
          },
        });

        if (!response.data) {
          throw new Error('!!!CHANGE!!!');
        }

        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue('error');
      }
    },
  );
