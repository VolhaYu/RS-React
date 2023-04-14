/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataResult } from 'components/ApiCards/api';
import { DataList } from '../../../types';

interface CardState {
  cards: DataList[];
  searcValue: string;
  resultSearch: DataResult[];
}
const initialState: CardState = {
  cards: [],
  searcValue: '',
  resultSearch: [],
};
const reducerForm = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    addSearchValue(state, action: PayloadAction<string>) {
      state.searcValue = action.payload;
    },
    addResultSearch(state, action) {
      state.resultSearch.push(action.payload);
    },
  },
});

export default reducerForm.reducer;
export const { addCard, addSearchValue, addResultSearch } = reducerForm.actions;
