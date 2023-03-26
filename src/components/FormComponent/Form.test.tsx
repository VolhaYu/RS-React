import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import FormsPage from '../../pages/Forms';
import Header from '../header/header';

describe('Form', () => {
  it('Renders Form Pages', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <FormsPage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form Pages');
    expect(FormsPage).toContain(Header);
  });
});
