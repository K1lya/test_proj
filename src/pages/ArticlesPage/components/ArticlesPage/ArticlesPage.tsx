import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  // consts
  const { className } = props;
  // const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])} />
  );
};

export default memo(ArticlesPage);
