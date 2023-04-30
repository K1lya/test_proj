import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, fetchProfileDataThunk } from 'entities/Profile';
import {
  updateProfileDataThunk,
} from '../services/updateProfileDataThunk/updateProfileDataThunk';
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
  reducers: {
    setReadonly(state, { payload }: PayloadAction<boolean>) {
      state.readonly = payload;
    },
    setProfile(state, { payload }: PayloadAction<IProfile>) {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
    cancelEdit(state) {
      state.readonly = true;
      state.validateErrors = undefined;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileDataThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileDataThunk.fulfilled, (
        state,
        { payload }: PayloadAction<IProfile>,
      ) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
      })
      .addCase(fetchProfileDataThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateProfileDataThunk.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileDataThunk.fulfilled, (
        state,
        { payload }: PayloadAction<IProfile>,
      ) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileDataThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.validateErrors = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
