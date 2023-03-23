import { CountryEnum, CurrencyEnum } from 'shared/types/enums';

export interface IProfile {
  first: string;
  lastname: string;
  age: number;
  currency: CurrencyEnum;
  country: CountryEnum;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
