import { CurrencyEnum } from 'entities/Currency';
import { CountryEnum } from 'entities/Country';

export interface IProfile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
