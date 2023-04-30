import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { updateProfileDataThunk } from '../services/updateProfileDataThunk/updateProfileDataThunk';
import { ProfileSchema, ValidateProfileErrorsEnum } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  first: 'Neo',
  lastname: '123',
  age: 23,
  city: 'Paris',
  username: 'admin',
  country: CountryEnum.Serbia,
  currency: CurrencyEnum.EUR,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test set Profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: undefined,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setProfile(data))).toEqual({ form: data });
  });

  test('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: undefined,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrorsEnum.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileDataThunk.pending)).toEqual({
      validateErrors: undefined,
      isLoading: true,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileDataThunk.fulfilled(data, ''))).toEqual({
      validateErrors: undefined,
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
