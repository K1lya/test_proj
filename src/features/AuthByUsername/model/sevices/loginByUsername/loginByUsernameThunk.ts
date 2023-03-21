import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsernameThunk = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  {rejectValue: string}
  >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      try {
        const responce = await axios.post<IUser>(
          'http://localhost:8000/login',
          authData,
        );

        if (!responce.data) {
          throw new Error('Error in async action loginByUsername');
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data));
        thunkAPI.dispatch(userActions.setAuthData(responce.data));

        return responce.data;
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('error');
      }
    },
  );
