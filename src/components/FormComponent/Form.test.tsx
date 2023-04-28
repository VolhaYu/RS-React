import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import FormsPage from '../../pages/Forms';
import Header from '../header/header';
import Form from './form';
import InputText from './inputText';
import InputDate from './inputDate';
import InputFile from './inputFile';
import InputSelect from './inputSelect';
import InputCheckbox from './inputCheckbox';
import InputRadio from './inputRadio';
import CardsData from './cardOfData/cardsData';
import Message from './cardOfData/Message';

function setup(tsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(tsx),
  };
}

describe('Form', () => {
  it('Renders Form Pages', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <FormsPage />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form Pages');
    expect(FormsPage).toContain(Header);
  });
  it('Render Inputs', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(Form).toContain(InputText);
    expect(Form).toContain(InputDate);
    expect(Form).toContain(InputFile);
    expect(Form).toContain(InputSelect);
    expect(Form).toContain(InputCheckbox);
    expect(Form).toContain(InputRadio);
  });
  it('Render Card and message', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday date')).toBeInTheDocument();
    expect(screen.getByLabelText('Avatar')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('HTML')).toBeInTheDocument();
    expect(screen.getByLabelText('CSS')).toBeInTheDocument();
    expect(screen.getByLabelText('JS')).toBeInTheDocument();
    expect(screen.getByLabelText('REACT')).toBeInTheDocument();
    expect(screen.getByLabelText('I agree to the processing of data:')).toBeInTheDocument();
  });
  it('display cards after onSubmit', async () => {
    const { user } = setup(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    await user.click(screen.getByRole('button'));
    expect(Form).toContain(CardsData);
    expect(Form).toContain(Message);
  });
  it('Renders cards in form', () => {
    render(
      <Provider store={store}>
        <CardsData />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Cards');
    expect(screen.getByTestId('wrap-card')).toBeInTheDocument();
  });
  it('Renders cards', () => {
    render(
      <Provider store={store}>
        <div className="wrap-card" data-testid="wrap-card" />
      </Provider>
    );
    waitFor(() => expect(screen.getByText(/Birthday:/)).toBeInTheDocument());
    waitFor(() => expect(screen.getByText(/City:/)).toBeInTheDocument());
    waitFor(() => expect(screen.getByRole('img')).toBeInTheDocument());
    waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 3,
        })
      ).toHaveTextContent('Scills:')
    );
  });
  it('Error elements', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    waitFor(() => expect(screen.queryAllByText('Fill in the field!')).not.toBeInTheDocument());
    waitFor(() => expect(screen.queryAllByText('Choose File!')).not.toBeInTheDocument());
    waitFor(() => expect(screen.queryAllByText('Choose city!')).not.toBeInTheDocument());
    waitFor(() =>
      expect(screen.queryAllByText('Choose at least one option')).not.toBeInTheDocument()
    );
    waitFor(() => expect(screen.queryAllByText('We must agree!')).not.toBeInTheDocument());
  });
});
