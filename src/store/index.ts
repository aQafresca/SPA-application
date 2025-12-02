import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi } from '@/services/authApi';

import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  });
};

export type TAppStore = ReturnType<typeof setupStore>;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppDispatch = TAppStore['dispatch'];
