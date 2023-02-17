import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  // consts
  const {className} = props;

  // States
  const [collapsed, setCollapsed] = useState(false);

  // Handlers
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className] )}>
      <button onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
