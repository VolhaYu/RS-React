import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import FormsPage from '../../pages/Forms';
import Header from '../header/header';
import Form from './form';
import InputText from './inputText';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputSelect from './inputSelect';
import InputCheckbox from './inputCheckbox';
import InputRadio from './inputRadio';

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
  it('Render Inputs', () => {
    render(<Form />);
    expect(Form).toContain(InputText);
    expect(Form).toContain(InputDate);
    expect(Form).toContain(InputFile);
    expect(Form).toContain(InputSelect);
    expect(Form).toContain(InputCheckbox);
    expect(Form).toContain(InputRadio);
  });
  it('Render Card and message', async () => {
    render(<Form />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('SurName:')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Avatar:')).toBeInTheDocument();
    expect(screen.getByLabelText('City:')).toBeInTheDocument();
    expect(screen.getByLabelText('HTML')).toBeInTheDocument();
    expect(screen.getByLabelText('CSS')).toBeInTheDocument();
    expect(screen.getByLabelText('JS')).toBeInTheDocument();
    expect(screen.getByLabelText('REACT')).toBeInTheDocument();
    expect(screen.getByLabelText('I agree to the processing of data:')).toBeInTheDocument();
  });
});
