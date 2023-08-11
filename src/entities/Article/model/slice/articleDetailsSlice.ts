import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchArticleByIdThunk,
} from '../services/fetchArticleByIdThunk/fetchArticleByIdThunk';
import { IArticle } from '../types/Article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleByIdThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleByIdThunk.fulfilled, (
        state,
        { payload }: PayloadAction<IArticle>,
      ) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchArticleByIdThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
