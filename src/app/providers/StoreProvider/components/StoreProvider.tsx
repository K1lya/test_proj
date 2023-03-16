import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  // consts
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateSchema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
