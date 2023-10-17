import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/Grid.svg';
import ListIcon from 'shared/assets/icons/List.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { ArticleViewEnum } from '../../model/types/Article';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
  className?: string;
  view?: ArticleViewEnum
  onViewClick?: (view: ArticleViewEnum) => void;
}

const viewTypes = [
  {
    view: ArticleViewEnum.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleViewEnum.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
  // consts
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleViewEnum) => () => {
    console.log(newView);
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonThemeEnum.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
