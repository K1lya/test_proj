import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { IUser, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload;
    },
    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
