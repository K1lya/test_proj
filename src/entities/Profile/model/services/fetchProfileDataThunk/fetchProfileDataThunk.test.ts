import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { fetchProfileDataThunk } from './fetchProfileDataThunk';

describe('fetchProfileDataThunk', () => {
  test('success fetch', async () => {
    const data = {
      first: 'Neo',
      lastname: '123',
      age: 23,
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    };

    const thunk = new TestAsyncThunk(fetchProfileDataThunk);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileDataThunk);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
