import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducerList,
  useDynamicReducer,
} from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlignEnum, TextSizeEnum } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeImg from 'shared/assets/icons/Eye.svg';
import DateImg from 'shared/assets/icons/DateLine.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
  ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  selectArticleDetailsData,
  selectArticleDetailsError,
  selectArticleDetailsIsLodaing,
} from '../../model/selectors/ArticleDetailsSelectors';
import {
  fetchArticleByIdThunk,
} from '../../model/services/fetchArticleByIdThunk/fetchArticleByIdThunk';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleBlockType, ArticleBlockTypeEnum } from '../../model/types/Article';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  // consts
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  useDynamicReducer(reducers, true);

  const isLoading = useSelector(selectArticleDetailsIsLodaing);
  const error = useSelector(selectArticleDetailsError);
  const article = useSelector(selectArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
      case ArticleBlockTypeEnum.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockTypeEnum.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockTypeEnum.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleByIdThunk(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton
          className={cls.title}
          width={300}
          height={32}
        />
        <Skeleton
          className={cls.skeleton}
          width={600}
          height={24}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    );
  }

  if (error) {
    return (
      <Text
        align={TextAlignEnum.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      <div className={cls.avatarWrapper}>
        <Avatar
          size={200}
          src={article?.img}
          className={cls.avatar}
        />
      </div>
      <Text
        className={cls.title}
        title={article?.title}
        size={TextSizeEnum.L}
      >
        {article?.subtitle}
      </Text>
      <div className={cls.articleInfo}>
        <Icon
          Svg={EyeImg}
          className={cls.icon}
        />
        <Text>{article?.views}</Text>
      </div>
      <div className={cls.articleInfo}>
        <Icon
          Svg={DateImg}
          className={cls.icon}
        />
        <Text>{article?.createdAt}</Text>
      </div>
      {article?.blocks.map(renderBlock)}
    </div>
  );
});
