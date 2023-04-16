import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import Header from './header';

describe('Header', () => {
  it('Render Header', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('Header Title Form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Form');
  });
  it('Header Title Home', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Home');
  });
  it('Header Title About', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About');
  });
  it('Header Title About', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About');
  });
  it('Header Title 404', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/*']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });
});
