import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'rick',
      },
    };
    expect(selectLoginUsername(state as StateSchema)).toEqual('rick');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginUsername(state as StateSchema)).toEqual('');
  });
});
