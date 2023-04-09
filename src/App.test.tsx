import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import App from './App';
import Header from './components/header/header';
import ApiCards from './components/ApiCards/apiCards';
import SearchBar from './components/SearchBar/SearchBar';

describe('App', () => {
  it('Renders Header', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(<Header />).toBeDefined();
    expect(screen.getAllByRole('link'));
  });
  it('Renders Home Pages', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Pages');
    expect(App).toContain(Header);
  });
  it('Renders About Pages', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Pages');
    expect(App).toContain(Header);
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
    expect(App).toContain(Header);
  });
});
