import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { Provider } from 'react-redux';
import ApiCards from './apiCards';
import SearchBar from '../SearchBar/SearchBar';
import { store } from '../../redux/store/store';
import PopUp from './popUp';

describe('Cards', () => {
  it('Renders Cards', async () => {
    render(
      <Provider store={store}>
        <ApiCards />
      </Provider>
    );
    expect(screen.getByTestId('card-product-list')).toBeInTheDocument();
    expect(screen.queryByText('Сould not fetch the data for that resours')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
  it('Render SearcBar', () => {
    render(
      <Provider store={store}>
        <SearchBar newResult={() => {}} />
      </Provider>
    );
    expect(<SearchBar newResult={() => {}} />).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });
  it('render popUp', async () => {
    render(
      <Provider store={store}>
        <PopUp valueId={1} closePopUp={() => {}} />
      </Provider>
    );
    expect(screen.queryByText('error!!')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });
  it('open popUp', async () => {
    render(
      <Provider store={store}>
        <ApiCards />
      </Provider>
    );
    userEvent.click(await screen.findByTestId('1'));
    expect(ApiCards).toContain(PopUp);
  });
});
