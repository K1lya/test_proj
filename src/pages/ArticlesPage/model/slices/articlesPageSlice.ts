import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleViewEnum, IArticle } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { fetchArticlesListThunk } from '../services/fetchArticlesListThunk';

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleViewEnum.GRID,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action:PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewEnum;
      state.view = view;
      state.limit = ArticleViewEnum.LIST ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesListThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesListThunk.fulfilled, (
        state,
        { payload }: PayloadAction<IArticle[]>,
      ) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, payload);
        state.hasMore = payload.length > 0;
      })
      .addCase(fetchArticlesListThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
