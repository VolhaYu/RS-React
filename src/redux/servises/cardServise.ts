import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DataResult, Result } from '../../components/ApiCards/api';

export const cardApi = createApi({
  reducerPath: 'createApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getAllCards: build.query<DataResult, string>({
      query: (searchValue = '', valueId = '') => ({
        url: `/character${valueId && `/${valueId}`}?${searchValue && `name=${searchValue}`}`,
      }),
    }),
  }),
});

export const { useGetAllCardsQuery } = cardApi;
// export default cardApi;
