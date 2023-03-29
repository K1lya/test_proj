import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(selectLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginPassword(state as StateSchema)).toEqual('');
  });
});
