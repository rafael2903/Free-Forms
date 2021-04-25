import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Login from './index';

test('renders login', () => {
  const history = createMemoryHistory({ initialEntries: ['/login'] });

  render(
    <BrowserRouter>
      <Router history={history}>
        <Login />
      </Router>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Faça login/i);
  expect(linkElement).toBeInTheDocument();

  const link = screen.getByText('Criar conta');
  fireEvent.click(link);
  expect(history.location.pathname).toBe('/signup');

  const onChange = jest.fn();
  const emailInput = screen.getByLabelText('E-mail');
  fireEvent.change(emailInput.find('FormInput'), {
    target: { value: 'rafaelrodrigues2903@gmail.com' },
  });
  expect(onChange).toBeCalled();

  const submitButton = screen.getByText('Entrar');
  fireEvent.click(submitButton);
});
