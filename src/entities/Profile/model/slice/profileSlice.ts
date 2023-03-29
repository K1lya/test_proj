import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, profileDataThunk } from 'entities/Profile';
import { ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileDataThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(profileDataThunk.fulfilled, (
        state,
        { payload }: PayloadAction<IProfile>,
      ) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(profileDataThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
