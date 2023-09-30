import { EntityState } from '@reduxjs/toolkit';
import { ArticleViewEnum, IArticle } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle>{
  isLoading?: boolean;
  error?: string;

  view: ArticleViewEnum;
}
