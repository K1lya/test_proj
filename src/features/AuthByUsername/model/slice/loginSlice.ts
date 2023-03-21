import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsernameThunk } from '../sevices/loginByUsername/loginByUsernameThunk';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsernameThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsernameThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsernameThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
