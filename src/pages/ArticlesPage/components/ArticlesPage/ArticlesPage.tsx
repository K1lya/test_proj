import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleViewEnum, ArticleViewSwitcher } from 'entities/Article';
import { ReducerList, useDynamicReducer } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchArticlesListThunk } from '../../model/services/fetchArticlesListThunk';
import {
  selectArticlesPageError,
  selectArticlesPageIsLoading,
  selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';

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
  // const { t } = useTranslation('article');
  useDynamicReducer(reducers);

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(selectArticlesPageView);
  const error = useSelector(selectArticlesPageError);
  const isLoading = useSelector(selectArticlesPageIsLoading);

  useInitialEffect(() => {
    dispatch(fetchArticlesListThunk());
    dispatch(articlesPageActions.initState());
  });

  const onViewHandler = useCallback((newView: ArticleViewEnum) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleViewSwitcher
        view={view}
        onViewClick={onViewHandler}
      />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </div>
  );
};

export default memo(ArticlesPage);
