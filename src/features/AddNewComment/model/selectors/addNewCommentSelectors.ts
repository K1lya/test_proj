import { StateSchema } from 'app/providers/StoreProvider';

export const selectAddNewCommentText = (state: StateSchema) => state.addNewComment?.text;

export const selectAddNewCommentError = (state: StateSchema) => state.addNewComment?.error;
