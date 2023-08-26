import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicReducer } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import {
  selectAddNewCommentError,
  selectAddNewCommentText,
} from '../../model/selectors/addNewCommentSelectors';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment = memo((props: AddNewCommentProps) => {
  // consts
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducer(reducers, true);

  const text = useSelector(selectAddNewCommentText);
  const error = useSelector(selectAddNewCommentError);

  const onChangeHandler = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onChangeHandler('');
  }, [onChangeHandler, onSendComment, text]);

  return (
    <div className={classNames(cls.AddNewComment, {}, [className])}>
      <Input
        title={t('Введите новый комментарий')}
        value={text}
        onChange={onChangeHandler}
        className={cls.input}
      />
      <Button
        theme={ButtonThemeEnum.OUTLINE}
        onClick={onSendHandler}
      >
        {t('Отправить')}
      </Button>
    </div>
  );
});

export default AddNewComment;
