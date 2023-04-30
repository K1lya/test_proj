import { StateSchema } from 'app/providers/StoreProvider';
import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData', () => {
  test('should return data', () => {
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
      },
    };
    expect(selectProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileData(state as StateSchema)).toEqual(undefined);
  });
});
