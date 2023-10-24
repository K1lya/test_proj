import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/components/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleViewEnum, IArticle } from '../../model/types/Article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

export const ArticleList = memo((props: ArticleListProps) => {
  // consts
  const {
    className,
    articles,
    isLoading,
    view = ArticleViewEnum.GRID,
  } = props;
  const { t } = useTranslation('article');

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            view={view}
          />
        ))
        : null}
      {isLoading && new Array(view === ArticleViewEnum.GRID ? 9 : 3)
        .fill(0)
        // eslint-disable-next-line react/no-array-index-key
        .map((_, index) => (
          <ArticleListItemSkeleton
            key={index}
            view={view}
          />
        ))}
    </div>
  );
});
