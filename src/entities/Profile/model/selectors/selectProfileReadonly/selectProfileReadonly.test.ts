import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileReadonly } from './selectProfileReadonly';

describe('selectProfileReadonly', () => {
  test('should return readonly status', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(selectProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
