import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Error test component
export const BugButton: FC = () => {
  // Hooks
  const { t } = useTranslation();

  // States
  const [error, setError] = useState<boolean>(false);

  // Handlers
  const makeErrorHandler = () => {
    setError(true);
  };

  // Effects
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={makeErrorHandler}
    >
      {t('Ошибка')}
    </Button>
  );
};
