import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(selectLoginError(state as StateSchema)).toEqual('error');
  });

  test('should rwork with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginError(state as StateSchema)).toEqual(undefined);
  });
});
