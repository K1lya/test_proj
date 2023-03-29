import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsernameThunk = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
      } = thunkAPI;
      try {
        const response = await extra.api.post<IUser>(
          '/login',
          authData,
        );

        if (!response.data) {
          throw new Error('Error in async action loginByUsername');
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue('error');
      }
    },
  );
