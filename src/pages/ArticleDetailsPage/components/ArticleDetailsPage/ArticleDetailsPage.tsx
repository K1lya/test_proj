import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { ReducerList, useDynamicReducer } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  fetchCommentsByArticleIdThunk,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleIdThunk/fetchCommentsByArticleIdThunk';
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, selectArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  // consts
  const { className } = props;
  useDynamicReducer(reducers, true);
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const comments = useSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleIdThunk(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена!')}
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text
        className={cls.commentTitle}
        title={t('Комментарии')}
      />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
