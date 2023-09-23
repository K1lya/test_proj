import { IUser } from 'entities/User';

export enum ArticleBlockTypeEnum {
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  TEXT = 'TEXT',
}

export interface IArticleBlockBase {
  id: string;
  type: ArticleBlockTypeEnum;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlockType = IArticleImageBlock | IArticleCodeBlock | IArticleTextBlock;

export enum ArticleTypeEnum {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMY = 'ECONOMY',
}

export interface IArticle {
  id: string;
  user: IUser;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypeEnum[];
  blocks: ArticleBlockType[];
}

export enum ArticleViewEnum {
  GRID = 'GRID',
  LIST = 'LIST',
}
