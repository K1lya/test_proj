import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/hooks/useDynamicReducer/useDynamicReducer';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
