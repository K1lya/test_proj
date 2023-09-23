import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeImg from 'shared/assets/icons/Eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  ArticleBlockTypeEnum, ArticleViewEnum, IArticle, IArticleTextBlock,
} from '../../model/types/Article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleViewEnum;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  // consts
  const { className, article, view } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const articleTypes = article.type.join(', ');
  const articleViews = String(article.views);
  const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT) as IArticleTextBlock;

  const openArticleHandler = useCallback(() => {
    navigate(RoutePaths.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleViewEnum.GRID) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card
          className={cls.card}
          onClick={openArticleHandler}
        >
          <div className={cls.imageWrapper}>
            <img
              src={article.img}
              alt={article.title}
              className={cls.img}
            />
            <Text className={cls.date}>{article.createdAt}</Text>
          </div>
          <div className={cls.infoWrapper}>
            <Text className={cls.types}>{articleTypes}</Text>
            <Text className={cls.views}>{String(article.views)}</Text>
            <Icon Svg={EyeImg} />
          </div>
          <Text className={cls.title}>{article.title}</Text>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.header}>
          <Avatar
            size={30}
            src={article.user.avatar}
          />
          <Text className={cls.username}>{article.user.username}</Text>
          <Text className={cls.date}>{article.createdAt}</Text>
        </div>
        <Text
          title={article.title}
          className={cls.title}
        />
        <Text className={cls.types}>{articleTypes}</Text>
        <img
          src={article.img}
          className={cls.img}
          alt={article.title}
        />
        {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={cls.textBlock}
          />
        )}
        <div className={cls.footer}>
          <Button
            onClick={openArticleHandler}
            theme={ButtonThemeEnum.OUTLINE}
          >
            {t('Читать далее')}
          </Button>
          <Text className={cls.views}>{articleViews}</Text>
          <Icon Svg={EyeImg} />
        </div>
      </Card>
    </div>
  );
});
