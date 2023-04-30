import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError', () => {
  test('should return 123', () => {
    const data = {
      first: 'Neo',
      lastname: '123',
      age: 23,
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        error: '123',
      },
    };
    expect(selectProfileError(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileError(state as StateSchema)).toEqual(undefined);
  });
});
