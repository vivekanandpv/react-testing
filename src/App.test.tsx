import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Initial view of the app component', () => {
  render(<App />);
  const increment = screen.getByRole('button');
  const headerText = screen.getByText('Counter: 0');
  expect(increment).toBeInTheDocument();
  expect(headerText).toBeInTheDocument();
});

test('Counter increments after the button click', () => {
  render(<App />);
  const increment = screen.getByRole('button');
  fireEvent.click(increment);
  const headerText = screen.getByText('Counter: 1');
  expect(increment).toBeInTheDocument();
  expect(headerText).toBeInTheDocument();
});
