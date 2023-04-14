import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataResult, Result } from '../../components/ApiCards/api';

export const cardApi = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getAllCards: build.query<DataResult, string>({
      query: (searchValue = '') => ({
        url: `/character?${searchValue && `name=${searchValue}`}`,
      }),
    }),
    getPopUp: build.query<Result, string>({
      query: (valueId = '') => ({
        url: `/character${valueId && `/${valueId}`}`,
      }),
    }),
  }),
});

export const { useGetAllCardsQuery, useGetPopUpQuery } = cardApi;
