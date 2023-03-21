import { StateSchema } from 'app/providers/StoreProvider';

export const selectUserData = (state: StateSchema) => state.user.authData;
