import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile, selectProfileForm } from 'entities/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileErrorsEnum } from '../../types/ProfileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileDataThunk = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<ValidateProfileErrorsEnum[]>
  >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;

      const formData = selectProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue([ValidateProfileErrorsEnum.SERVER_ERROR]);
      }
    },
  );
