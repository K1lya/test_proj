import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<
  ArticleTextBlockComponentProps
  > = memo((props) => {
  // consts
    const { className, block } = props;
    return (
      <div className={classNames('', {}, [className])}>
        {block.title && (
        <Text
          title={block.title}
          className={cls.title}
        />
        )}
        {block.paragraphs.map((paragraph, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text
            key={paragraph}
            className={cls.paragraph}
          >
            {paragraph}
          </Text>
        ))}
      </div>
    );
  });
