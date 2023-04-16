import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
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
    expect(await screen.findByTestId('window-close')).toBeInTheDocument();
    expect(await screen.findByText(/Name:/)).toBeInTheDocument();
    expect(await screen.findByText(/Species:/)).toBeInTheDocument();
    expect(await screen.findByText(/Status:/)).toBeInTheDocument();
    expect(await screen.findByText(/Gender:/)).toBeInTheDocument();
    expect(await screen.findByText(/Location:/)).toBeInTheDocument();
    expect(await screen.findByText(/Episode:/)).toBeInTheDocument();
  });
  it('open popUp', async () => {
    render(
      <Provider store={store}>
        <ApiCards />
      </Provider>
    );
    userEvent.click(await screen.findByTestId('1'));
    expect(ApiCards).toContain(PopUp);
    expect(await screen.findByText('Name: Rick Sanchez')).toBeInTheDocument();
    expect(await screen.findByText('Species: Human')).toBeInTheDocument();
    expect(await screen.findByText('Status: Alive')).toBeInTheDocument();
    expect(await screen.findByText('Gender: Male')).toBeInTheDocument();
    expect(await screen.findByText('Location: Citadel of Ricks')).toBeInTheDocument();
    expect(await screen.findByText('Episode: 51')).toBeInTheDocument();
  });
  it('closepopUp', async () => {
    render(
      <Provider store={store}>
        <PopUp valueId={1} closePopUp={() => {}} />
      </Provider>
    );
    userEvent.click(await screen.findByTestId('window-close'));
    waitFor(() => expect(screen.queryByRole('img')).not.toBeInTheDocument());
    expect(screen.queryByTestId('window-close')).toBeInTheDocument();
    expect(screen.queryByText(/Name:/)).toBeInTheDocument();
    expect(screen.queryByText(/Species:/)).toBeInTheDocument();
    expect(screen.queryByText(/Status:/)).toBeInTheDocument();
    expect(screen.queryByText(/Gender:/)).toBeInTheDocument();
    expect(screen.queryByText(/Location:/)).toBeInTheDocument();
    expect(screen.queryByText(/Episode:/)).toBeInTheDocument();
  });
});
