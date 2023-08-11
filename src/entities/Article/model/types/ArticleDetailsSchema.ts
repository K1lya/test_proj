import { IArticle } from './Article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: IArticle
}
