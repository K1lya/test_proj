import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo((props) => {
  // consts
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      onClick={changeLanguageHandler}
      className={classNames('', {}, [className])}
      theme={ButtonThemeEnum.CLEAR_INVERTED}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});
