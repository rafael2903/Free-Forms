import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders oie', () => {
  render(<App />);
  const linkElement = screen.getByText(/oie/i);
  expect(linkElement).toBeInTheDocument();
});
