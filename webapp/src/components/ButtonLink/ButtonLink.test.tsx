import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonLink from './ButtonLink';

test('renders button', () => {
  render(<ButtonLink to="/" label='testing' />);
  const labelElement = screen.getByTestId("Button::Label");
  expect(labelElement).toBeInTheDocument();
});
