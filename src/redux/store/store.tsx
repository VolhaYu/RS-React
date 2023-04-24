/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as toolkitRaw from '@reduxjs/toolkit';
import * as rtkQuery from '@reduxjs/toolkit/dist/query/index.js';
// import * as rtkQuery from '@reduxjs/toolkit/dist/query';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import reducerForm from './reducers/reducers';
import { cardApi } from '../servises/cardServise';

const { combineReducers, configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
const { setupListeners } = ((rtkQuery as any).default ?? rtkQuery) as typeof rtkQuery;

export const rootReducer = combineReducers({
  reducerForm,
  [cardApi.reducerPath]: cardApi.reducer,
});

export const setypStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardApi.middleware),
  });
};
export const store = setypStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setypStore>;
export type AppDispatch = AppStore['dispatch'];
