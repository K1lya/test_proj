import { FC, memo } from 'react';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { ISidebarItem } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

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
    authOnly,
  } = props;

  // Selectors
  const isAuth = useSelector(selectUserAuthData);

  // Hooks
  const { t } = useTranslation();

  if (authOnly && !isAuth) {
    return null;
  }

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
