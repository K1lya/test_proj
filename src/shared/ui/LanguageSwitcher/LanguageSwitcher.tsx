import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  // consts
  const {className} = props;
  const {t, i18n} = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }
  return (
      <Button
        onClick={changeLanguageHandler}
        className={classNames(cls.LanguageSwitcher, {}, [className])}
      >
        {t("Язык")}
      </Button>
  );
};
