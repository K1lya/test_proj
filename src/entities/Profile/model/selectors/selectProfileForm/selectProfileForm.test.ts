import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm', () => {
  test('should return form', () => {
    const form = {
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
        form,
      },
    };
    expect(selectProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
