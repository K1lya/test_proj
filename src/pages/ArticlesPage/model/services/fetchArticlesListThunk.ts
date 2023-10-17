import { IArticle } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface fetchArticlesListThunkProps {
  page?: number;
}

export const fetchArticlesListThunk = createAsyncThunk<
  IArticle[],
  fetchArticlesListThunkProps,
  ThunkConfig<string>
  >(
    'articlesList/fetchArticlesListThunk',
    async (props, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkAPI;

      const { page = 1 } = props;
      const limit = selectArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<IArticle[]>('/articles', {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
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
