import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe("Input.tsx", () => {
  test('should render Input Component normally', () => {
    render(<Input label='testing' />);
    const labelElement = screen.getByTestId("Input::Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toContainHTML('<span data-testid="Input::Label">testing</span>')
  });

  test('Should onChange be called', () => {
    const action = jest.fn();
    render(<Input onChange={action} label='testing' />);
    const InputElement = screen.getByTestId("Input::Input");
    userEvent.type(InputElement, "new value")
    expect(action).toHaveBeenCalled();
    expect(InputElement).toHaveValue("new value")
  });
})
