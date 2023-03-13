import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutImg from 'shared/assets/icons/About.svg';
import HomeImg from 'shared/assets/icons/Home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  // consts
  const { className } = props;
  const { t } = useTranslation();

  // States
  const [collapsed, setCollapsed] = useState(false);

  // Handlers
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        type="button"
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonThemeEnum.BACKGROUND_INVERTED}
        square
        size={ButtonSizeEnum.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>

        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          to={RoutePaths.main}
          className={cls.item}
        >
          <HomeImg className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          to={RoutePaths.about}
          className={cls.item}
        >
          <AboutImg className={cls.icon} />
          <span className={cls.link}>
            {t('О Сайте')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
};
