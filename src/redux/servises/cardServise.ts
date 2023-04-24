/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as rtkQueryReact from '@reduxjs/toolkit/dist/query/react/index.js';
import { DataResult, Result } from '../../types';

const { createApi, fetchBaseQuery } = ((rtkQueryReact as any).default ??
  rtkQueryReact) as typeof rtkQueryReact;

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
