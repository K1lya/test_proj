import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  // consts
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('article');
  return (
    <div className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            key={comment.id}
            comment={comment}
          />
        ))
        : <Text>{t('Комментарии отсутствуют')}</Text>}
    </div>
  );
});
