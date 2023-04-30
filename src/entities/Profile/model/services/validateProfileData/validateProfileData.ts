import { IProfile, ValidateProfileErrorsEnum } from '../../types/ProfileSchema';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileErrorsEnum.NO_DATA];
  }

  const {
    first,
    lastname,
    age,
    country,
  } = profile;

  const errors: ValidateProfileErrorsEnum[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrorsEnum.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrorsEnum.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrorsEnum.INCORRECT_COUNTRY);
  }

  return errors;
};
