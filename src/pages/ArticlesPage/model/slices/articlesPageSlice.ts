import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ArticleSortFieldEnum, ArticleTypeEnum, ArticleViewEnum, IArticle,
} from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { SortOrder } from 'shared/types/types';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
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
    limit: 9,
    order: 'ask',
    sort: ArticleSortFieldEnum.CREATED,
    search: '',
    type: ArticleTypeEnum.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state, action:PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action:PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action:PayloadAction<ArticleSortFieldEnum>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action:PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action:PayloadAction<ArticleTypeEnum>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewEnum;
      state.view = view;
      state.limit = ArticleViewEnum.LIST ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesListThunk.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesListThunk.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
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
