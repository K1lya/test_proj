import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrorsEnum } from 'entities/Profile/model/types/ProfileSchema';
import { updateProfileDataThunk } from './updateProfileDataThunk';

const data = {
  first: 'Neo',
  lastname: '123',
  age: 23,
  city: 'Paris',
  username: 'admin',
  country: CountryEnum.Serbia,
  currency: CurrencyEnum.EUR,
};

describe('updateProfileDataThunk', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileDataThunk,
      {
        profile: {
          form: data,
        },
      },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error from server', async () => {
    const thunk = new TestAsyncThunk(updateProfileDataThunk, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorsEnum.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileDataThunk, {
      profile: {
        form: { ...data, age: undefined, country: undefined },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorsEnum.INCORRECT_AGE, ValidateProfileErrorsEnum.INCORRECT_COUNTRY]);
  });
});
