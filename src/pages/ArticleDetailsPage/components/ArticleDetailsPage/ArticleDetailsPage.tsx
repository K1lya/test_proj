import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
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
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import {
  fetchArticlesRecommendationsThunk,
} from '../../model/services/fetchArticlesRecommendationsThunk/fetchArticlesRecommendationsThunk';
import { selectArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
  fetchCommentsByArticleIdThunk,
} from '../../model/services/fetchCommentsByArticleIdThunk/fetchCommentsByArticleIdThunk';
import { addCommentForArticleThunk } from '../../model/services/addCommentForArticle/addCommentForArticleThunk';
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { selectArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { selectArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsePage: articleDetailsPageReducer,
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
  const recommendations = useSelector(selectArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(selectArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleIdThunk(id));
    dispatch(fetchArticlesRecommendationsThunk());
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
        title={t('Рекомендации')}
      />
      <ArticleList
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        className={cls.recommendations}
        target="_blank"
      />
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
