import { FC, memo } from 'react';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { ISidebarItem } from '../../model/types/items';

interface SidebarItemProps extends ISidebarItem{
  isCollapsed: boolean;
  theme?: AppLinkThemeEnum
}

export const SidebarItem: FC<SidebarItemProps> = memo((
  props,
) => {
  // consts
  const {
    isCollapsed,
    path,
    text,
    Icon,
    theme = AppLinkThemeEnum.SECONDARY,
  } = props;
  const { t } = useTranslation();
  return (
    <AppLink
      theme={theme}
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
    >
      <Icon className={cls.icon} />
      <span className={cls.link}>
        {t(text)}
      </span>
    </AppLink>
  );
});
