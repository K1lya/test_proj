import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile, selectProfileForm } from 'entities/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileDataThunk = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
  >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;

      const formData = selectProfileForm(getState());

      try {
        const response = await extra.api.put<IProfile>('/profile', formData);
        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
