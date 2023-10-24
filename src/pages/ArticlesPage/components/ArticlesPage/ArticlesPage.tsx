import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { ReducerList, useDynamicReducer } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { ArticlesPageFilters } from 'pages/ArticlesPage/components/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePageThunk } from '../../model/services/fetchNextArticlePageThunk';
import { initArticlesPageThunk } from '../../model/services/initArticlesPageThunk';
import { selectArticlesPageIsLoading, selectArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  // consts
  const { className } = props;
  const dispatch = useAppDispatch();

  useDynamicReducer(reducers, false);
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(selectArticlesPageView);
  const isLoading = useSelector(selectArticlesPageIsLoading);

  useInitialEffect(() => {
    dispatch(initArticlesPageThunk(searchParams));
  });

  const nextArticlesHandler = useCallback(() => {
    dispatch(fetchNextArticlePageThunk());
  }, [dispatch]);

  return (
    <Page
      onScrollEnd={nextArticlesHandler}
      className={classNames(cls.ArticlesPage, {}, [className])}
    >
      <ArticlesPageFilters />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={cls.list}
      />
    </Page>
  );
};

export default memo(ArticlesPage);
