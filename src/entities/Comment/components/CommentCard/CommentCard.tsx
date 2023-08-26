import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  // consts
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton
            width={30}
            height={30}
            border="50%"
          />
          <Skeleton
            className={cls.username}
            height={16}
            width={100}
          />
        </div>
        <Skeleton
          className={cls.text}
          width="100%"
          height={50}
        />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={RoutePaths.profile + comment.user.id}>
        <div className={cls.header}>
          {comment.user.avatar && (
          <Avatar
            size={30}
            src={comment.user.avatar}
          />
          )}
          <Text
            className={cls.username}
            title={comment?.user.username}
          />
        </div>
      </AppLink>
      <Text className={cls.text}>{comment.text}</Text>
    </div>
  );
});
