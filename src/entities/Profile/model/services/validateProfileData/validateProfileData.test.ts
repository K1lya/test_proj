import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';
import { ValidateProfileErrorsEnum } from 'entities/Profile/model/types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
  test('success', async () => {
    const data = {
      first: 'Neo',
      lastname: '123',
      age: 23,
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firs and last name', async () => {
    const data = {
      age: 23,
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([ValidateProfileErrorsEnum.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const data = {
      first: 'Neo',
      lastname: '123',
      age: undefined,
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([ValidateProfileErrorsEnum.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const data = {
      first: 'Neo',
      lastname: '123',
      age: 23,
      city: 'Paris',
      username: 'admin',
      country: undefined,
      currency: CurrencyEnum.EUR,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([ValidateProfileErrorsEnum.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const data = {

    };

    const result = validateProfileData(data);

    expect(result).toEqual([
      ValidateProfileErrorsEnum.INCORRECT_USER_DATA,
      ValidateProfileErrorsEnum.INCORRECT_AGE,
      ValidateProfileErrorsEnum.INCORRECT_COUNTRY,
    ]);
  });
});
