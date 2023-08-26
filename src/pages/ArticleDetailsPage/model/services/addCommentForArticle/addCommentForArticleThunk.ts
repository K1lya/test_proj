import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectUserAuthData } from 'entities/User';
import { selectArticleDetailsData } from 'entities/Article';
import {
  fetchCommentsByArticleIdThunk,
} from '../fetchCommentsByArticleIdThunk/fetchCommentsByArticleIdThunk';

export const addCommentForArticleThunk = createAsyncThunk<
  IComment,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
        getState,
      } = thunkAPI;

      const userData = selectUserAuthData(getState());
      const article = selectArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data error');
      }

      try {
        const response = await extra.api.post<IComment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text,
        });
        if (!response.data) {
          throw new Error('!!!CHANGE!!!');
        }

        dispatch(fetchCommentsByArticleIdThunk(article.id));

        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    },
  );
