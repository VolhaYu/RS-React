import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';
import React from 'react';

describe('App', () => {
  it('Renders Home Pages', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />      
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Pages');
  });
  it('Renders About Pages', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />      
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Pages');
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
  });
});
