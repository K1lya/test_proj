import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/ProfileSchema';

export const fetchProfileDataThunk = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
  >(
    'profile/ProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<IProfile>('/profile');

        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );