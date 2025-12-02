import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAuthRequest, IAuthResponse } from '@/interface/auth';

/*I think It needs to be hidden in .env*/
const baseUrl = 'https://dummyjson.com';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    loginUser: build.mutation<IAuthResponse, IAuthRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        body: credentials,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
