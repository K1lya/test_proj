import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { ReducerList, useDynamicReducer } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddNewComment } from 'features/AddNewComment';
import { Button } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import {
  fetchCommentsByArticleIdThunk,
} from '../../model/services/fetchCommentsByArticleIdThunk/fetchCommentsByArticleIdThunk';
import {
  addCommentForArticleThunk,
} from '../../model/services/addCommentForArticle/addCommentForArticleThunk';
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
  const navigate = useNavigate();

  const comments = useSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleIdThunk(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticleThunk(text));
  }, [dispatch]);

  const backToArticlesHandler = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена!')}
      </Page>
    );
  }
  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <Button onClick={backToArticlesHandler}>{t('Назад')}</Button>
      <ArticleDetails id={id} />
      <Text
        className={cls.commentTitle}
        title={t('Комментарии')}
      />
      <AddNewComment onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
