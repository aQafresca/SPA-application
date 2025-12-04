import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IApiResponse } from '@/interface/characters';

const baseUrl = 'https://rickandmortyapi.com';

interface IGetCharacters {
  page: number;
  name: string;
}

export const getCharactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  keepUnusedDataFor: 300,
  endpoints: (build) => ({
    getCharacters: build.query<IApiResponse, IGetCharacters>({
      query: ({ page, name }) => {
        const nameQuery = name ? `&name=${name}` : '';

        return {
          url: `api/character?page=${page}${nameQuery}`,
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = getCharactersApi;
