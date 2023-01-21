import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import reducer from '../slices';
import { api } from '../api';

export const store = configureStore({
  reducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
  devTools: false,
});
setupListeners(store.dispatch);
