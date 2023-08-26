import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/ProfileSchema';

export const fetchProfileDataThunk = createAsyncThunk<
  IProfile,
  string,
  ThunkConfig<string>
  >(
    'profile/ProfileData',
    async (profileId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

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
