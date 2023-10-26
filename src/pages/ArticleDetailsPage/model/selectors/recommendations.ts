import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleRecommendationsIsLoading = (
  state: StateSchema,
) => state.articleDetailsePage?.recommendations?.isLoading;

export const selectArticleecommendationsError = (
  state: StateSchema,
) => state.articleDetailsePage?.recommendations?.error;
