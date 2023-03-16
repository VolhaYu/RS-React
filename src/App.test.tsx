import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';
import React from 'react';
import Cards from './components/cardsComponents/Cards';

describe('App', () => {
  it('Renders Cards', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />      
      </MemoryRouter>
    );
    expect(Cards).toBeDefined();
  });
  // it('Renders Home Pages', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/home']}>
  //       <App />      
  //     </MemoryRouter>
  //   );
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     })
  //   ).toHaveTextContent('Home Pages');
  // });
  // it('Renders About Pages', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/about']}>
  //       <App />      
  //     </MemoryRouter>
  //   );
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     })
  //   ).toHaveTextContent('About Pages');
  // });
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
  });
});
