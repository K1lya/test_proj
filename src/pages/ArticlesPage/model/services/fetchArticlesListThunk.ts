import { IArticle } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticlesListThunk = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
  >(
    'articlesList/fetchArticlesListThunk',
    async (articleId, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
      } = thunkAPI;

      try {
        const response = await extra.api.get<IArticle[]>('/articles', {
          params: {
            _expand: 'user',
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
