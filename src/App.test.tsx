import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter, MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import Header from './components/header/header';
import { store } from './redux/store/store';

describe('App', () => {
  it('Renders Header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(<Header />).toBeDefined();
    expect(screen.getAllByRole('link'));
  });
  it('Renders Home Pages', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
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
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
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
      <Provider store={store}>
        <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
    expect(App).toContain(Header);
  });
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
});
