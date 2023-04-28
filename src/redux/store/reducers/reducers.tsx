/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import * as toolkitRaw from '@reduxjs/toolkit';
import { DataList } from '../../../types';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

interface CardState {
  cards: DataList[];
  searcValue: string;
}
export const initialState: CardState = {
  cards: [],
  searcValue: '',
};
const reducerForm = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    addSearchValue(state, action) {
      state.searcValue = action.payload;
    },
  },
});

export default reducerForm.reducer;
export const { addCard, addSearchValue } = reducerForm.actions;
