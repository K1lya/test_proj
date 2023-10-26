import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArticle } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticlesRecommendationsThunk = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticlesRecommendationsThunk',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
    } = thunkAPI;

    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: 4,
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
