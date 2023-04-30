import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrorsEnum } from 'entities/Profile/model/types/ProfileSchema';
import { selectProfileValidateErrors } from './selectProfileValidateErrors';

describe('selectProfileValidateErrors', () => {
  test('should return validate errors', () => {
    const validateErrors = [ValidateProfileErrorsEnum.NO_DATA];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
