import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { handlers } from 'mocks/handers';

import React from 'react';
import ApiCards from './apiCards';
import SearchBar from '../SearchBar/SearchBar';

describe('Cards', () => {
  it('Renders Cards', async () => {
    render(<ApiCards />);
    expect(screen.getByTestId('card-product-list')).toBeInTheDocument();
    expect(screen.queryByText('Сould not fetch the data for that resours')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
});
