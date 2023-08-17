import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchCommentsByArticleIdThunk = createAsyncThunk<
  IComment[],
  string | undefined,
  ThunkConfig<string>
  >(
    'articleDetails/fetchCommentsByArticleIdThunk',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      if (!articleId) {
        rejectWithValue('error');
      }

      try {
        const response = await extra.api.get<IComment[]>('/comments', {
          params: {
            articleId,
            _expand: 'user',
          },
        });

        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
