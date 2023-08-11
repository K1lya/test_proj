import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlignEnum } from 'shared/ui/Text/Text';
import { IArticleImageBlock } from '../../model/types/Article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<
  ArticleImageBlockComponentProps
  > = memo((props) => {
  // consts
    const { className, block } = props;
    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img
          src={block.src}
          alt={block.title}
          className={cls.image}
        />
        {block.title && <Text align={TextAlignEnum.CENTER}>{block.title}</Text>}
      </div>
    );
  });
