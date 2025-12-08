import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IApiResponse, ICharacter } from '@/interface/characters';

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
        const nameQuery: string = name ? `&name=${name}` : '';

        return {
          url: `api/character?page=${page}${nameQuery}`,
        };
      },
    }),
    getCharacterById: build.query<ICharacter, number | undefined>({
      query: (id) => ({
        url: `api/character/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = getCharactersApi;
