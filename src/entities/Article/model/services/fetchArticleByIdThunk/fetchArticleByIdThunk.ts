import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/Article';

export const fetchArticleByIdThunk = createAsyncThunk<
  IArticle,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/fetchArticleByIdThunk',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
