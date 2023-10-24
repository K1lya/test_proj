import { EntityState } from '@reduxjs/toolkit';
import {
  ArticleSortFieldEnum, ArticleTypeEnum, ArticleViewEnum, IArticle,
} from 'entities/Article';
import { SortOrder } from 'shared/types/types';

export interface ArticlesPageSchema extends EntityState<IArticle>{
  isLoading?: boolean;
  error?: string;

  // pagination
  view: ArticleViewEnum;
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  order: SortOrder;
  sort: ArticleSortFieldEnum;
  search: string;
  type: ArticleTypeEnum;

  _inited?: boolean;
}
