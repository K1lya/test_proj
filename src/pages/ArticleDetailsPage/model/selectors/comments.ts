import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsePage?.comments?.isLoading;

export const selectArticleCommentsError = (state: StateSchema) => state.articleDetailsePage?.comments?.error;
