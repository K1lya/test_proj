import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortFieldEnum } from 'entities/Article';
import { SortOrder } from 'shared/types/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFieldEnum;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortFieldEnum) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  // consts
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  } = props;

  const { t } = useTranslation('article');

  const orderOptions = useMemo<ISelectOption[]>(() => [
    {
      value: 'asc',
      title: t('возрастанию'),
    },
    {
      value: 'desc',
      title: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<ISelectOption[]>(() => [
    {
      value: ArticleSortFieldEnum.CREATED,
      title: t('дате создания'),
    },
    {
      value: ArticleSortFieldEnum.TITLE,
      title: t('названию'),
    },
    {
      value: ArticleSortFieldEnum.VIEWS,
      title: t('количеству просмотров'),
    },
  ], [t]);

  const changeSordHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortFieldEnum);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={changeSordHandler}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={changeOrderHandler}
      />
    </div>
  );
});
