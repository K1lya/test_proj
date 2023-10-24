import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFieldEnum, ArticleTypeEnum } from 'entities/Article';

export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view;

export const selectArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;

export const selectArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;

export const selectArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export const selectArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;

export const selectArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || 'ask';

export const selectArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortFieldEnum.CREATED;

export const selectArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';

export const selectArticlesPageType = (state: StateSchema) => state.articlesPage?.type || ArticleTypeEnum.ALL;
