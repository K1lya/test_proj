import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  // consts
  const { className } = props;
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      onClick={changeLanguageHandler}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  );
};
