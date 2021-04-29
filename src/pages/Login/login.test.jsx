// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter, Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import axios from 'axios';
// import Login from './index';
// import App from '../../App';
// import 'regenerator-runtime/runtime';

// jest.mock('axios');

// test('Fazer login', async () => {
//   const history = createMemoryHistory({ initialEntries: ['/login'] });

//   render(
//     <BrowserRouter>
//       <Router history={history}>
//         <Login />
//       </Router>
//     </BrowserRouter>
//   );

//   axios.post.mockResolvedValue({
//     data: {
//       id: 1,
//       is_admin: false,
//     },
//   });

//   const linkElement = screen.getByText(/Faça login/i);
//   expect(linkElement).toBeInTheDocument();

//   const emailInput = screen.getByAltText('email');
//   fireEvent.change(emailInput, {
//     target: { value: 'rafaelrodrigues29032@gmail.com' },
//   });

//   const passwordInput = screen.getByAltText('senha');
//   fireEvent.change(passwordInput, {
//     target: { value: '55789966' },
//   });

//   const submitButton = screen.getByText('Entrar');
//   await fireEvent.click(submitButton);
//   expect(history.location.pathname).toBe('/');

//   const error = screen.getByText('Email ou senha inválidos');
//   expect(error).not.toBeInTheDocument();
// });

// test('Alterar entre páginas de login e cadastro', () => {
//   const history = createMemoryHistory({ initialEntries: ['/login'] });

//   render(
//     <BrowserRouter>
//       <Router history={history}>
//         <App />
//       </Router>
//     </BrowserRouter>
//   );

//   const link = screen.getByText('Criar conta');
//   // fireEvent.click(link, { button: 0 });
//   link.simulate('click');
//   expect(screen.getByText('Criar conta')).not.toBeInTheDocument();
//   // expect(history.location.pathname).toBe('/signup');

//   // link = screen.getByText('Faça login');
//   // fireEvent.click(link, { button: 0 });
//   // expect(history.location.pathname).toBe('/login');
// });

// test('Enviar form de login', () => {
//   const history = createMemoryHistory({ initialEntries: ['/login'] });

//   render(
//     <BrowserRouter>
//       <Router history={history}>
//         <Login />
//       </Router>
//     </BrowserRouter>
//   );

//   const onSubmit = jest.fn();

//   const form = screen.getByTestId('form');
//   // fireEvent.click(link, { button: 0 });
//   console.log(form.state);
//   // link.simulate('click');
//   // expect(screen.getByText('Criar conta')).not.toBeInTheDocument();
//   // expect(history.location.pathname).toBe('/signup');
//   expect(1).toBe(1);
//   // link = screen.getByText('Faça login');
//   // fireEvent.click(link, { button: 0 });
//   // expect(history.location.pathname).toBe('/login');
// });
