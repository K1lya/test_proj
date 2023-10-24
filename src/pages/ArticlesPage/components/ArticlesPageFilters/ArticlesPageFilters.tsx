import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ArticleSortFieldEnum,
  ArticleSortSelector,
  ArticleTypeEnum,
  ArticleViewEnum,
  ArticleViewSwitcher,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { fetchArticlesListThunk } from '../../model/services/fetchArticlesListThunk';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';
import {
  selectArticlesPageOrder,
  selectArticlesPageSearch,
  selectArticlesPageSort,
  selectArticlesPageType,
  selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  // consts
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const view = useSelector(selectArticlesPageView);
  const sort = useSelector(selectArticlesPageSort);
  const order = useSelector(selectArticlesPageOrder);
  const search = useSelector(selectArticlesPageSearch);
  const type = useSelector(selectArticlesPageType);

  const typeTabs = useMemo(() => Object.entries(ArticleTypeEnum).map(
    ([name, value]) => ({
      value,
      content: t(name),
    }),
  ), [t]);

  const fetchDataHandler = useCallback(() => {
    dispatch(fetchArticlesListThunk({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchDataHandler);

  const onChangeViewHandler = useCallback((newView: ArticleViewEnum) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onChangeOrderHandler = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setOrder(newOrder));
    fetchDataHandler();
  }, [dispatch, fetchDataHandler]);

  const onChangeSearchHandler = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setSearch(newSearch));
    debounceFetchData();
  }, [debounceFetchData, dispatch]);

  const onChangeSortHandler = useCallback((newSort: ArticleSortFieldEnum) => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setSort(newSort));
    fetchDataHandler();
  }, [dispatch, fetchDataHandler]);

  const onChangeTypeHandler = useCallback((tab: TabItem) => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setType(tab.value as ArticleTypeEnum));
    debounceFetchData();
  }, [debounceFetchData, dispatch]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSortHandler}
          onChangeOrder={onChangeOrderHandler}
        />
        <ArticleViewSwitcher
          view={view}
          onViewClick={onChangeViewHandler}
        />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск')}
          onChange={onChangeSearchHandler}
          value={search}
        />
      </Card>
      <Tabs
        tabs={typeTabs}
        value={type}
        onTabClick={onChangeTypeHandler}
        className={cls.tabs}
      />
    </div>
  );
});
