import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthResponse, IUser } from '@/interface/auth';
import { tokenStorage } from '@/shared/lib/tokenStorage';

interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: IAuthState = {
  user: null,
  token: tokenStorage.get(),
  isAuth: Boolean(tokenStorage.get()),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IAuthResponse>) => {
      const { accessToken, ...userData } = action.payload;

      state.user = userData;
      state.token = accessToken;
      tokenStorage.set(accessToken);
      state.isAuth = true;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      tokenStorage.clear();
      state.isAuth = false;
    },
  },
});
export const { setAuthData, logOut } = authSlice.actions;
export default authSlice.reducer;
