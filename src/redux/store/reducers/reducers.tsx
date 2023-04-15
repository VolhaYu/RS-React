/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataList } from '../../../types';

interface CardState {
  cards: DataList[];
  searcValue: string;
}
const initialState: CardState = {
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
    addSearchValue(state, action: PayloadAction<string>) {
      state.searcValue = action.payload;
    },
  },
});

export default reducerForm.reducer;
export const { addCard, addSearchValue } = reducerForm.actions;
