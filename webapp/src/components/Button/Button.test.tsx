import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe("Button.tsx", () => {
  test('should render Button Component normally', () => {
    render(<Button label='testing' />);
    const labelElement = screen.getByTestId("Button::Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toContainHTML('<span data-testid="Button::Label">testing</span>')
  });

  test('Should onClick be called', () => {
    const action = jest.fn();
    render(<Button onClick={action} label='testing' />);
    const buttonElement = screen.getByTestId("Button::Button");
    fireEvent.click(buttonElement);
    expect(action).toBeCalledWith();
  });
})
