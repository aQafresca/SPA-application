import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi } from '@/services/authApi';
import { getCharactersApi } from '@/services/charactersApi';

import authReducer from './auth';
import charactersReducer from './characters';

const rootReducer = combineReducers({
  auth: authReducer,
  characters: charactersReducer,
  [authApi.reducerPath]: authApi.reducer,
  [getCharactersApi.reducerPath]: getCharactersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, getCharactersApi.middleware),
  });
};

export type TAppStore = ReturnType<typeof setupStore>;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppDispatch = TAppStore['dispatch'];
