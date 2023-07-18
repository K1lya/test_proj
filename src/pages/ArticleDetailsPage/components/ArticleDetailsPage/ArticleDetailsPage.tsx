import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  // consts
  const { className } = props;
  // const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])} />
  );
};

export default memo(ArticleDetailsPage);
