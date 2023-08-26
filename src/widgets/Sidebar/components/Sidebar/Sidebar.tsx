import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { selectSidebarItems } from '../../model/selectors/selectSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  // consts
  const { className } = props;

  // States
  const [collapsed, setCollapsed] = useState(false);

  // Selectors
  const sidebarItemsList = useSelector(selectSidebarItems);

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
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            isCollapsed={collapsed}
            Icon={item.Icon}
            text={item.text}
            path={item.path}
            authOnly={item.authOnly}
          />
        ))}
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
});
