import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Default } from 'styles/themes';
import { TextButton } from '.';

afterEach(cleanup);

const defaultProps = {
  label: 'DefaultLabel',
  onClick: jest.fn(),
};

describe('TextButton test', () => {
  it('should show default button label', () => {
    render(
      <ThemeProvider theme={Default}>
        <TextButton {...defaultProps} />
      </ThemeProvider>,
    );
    expect(screen.getByText('DefaultLabel')).toBeInTheDocument();
  });

  it('should show different button label', () => {
    render(
      <ThemeProvider theme={Default}>
        <TextButton {...defaultProps} label="Another label" />
      </ThemeProvider>,
    );
  });

  it('should calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={Default}>
        <TextButton {...defaultProps} onClick={onClick} />
      </ThemeProvider>,
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call a function when button is disabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={Default}>
        <TextButton {...defaultProps} onClick={onClick} disabled />
      </ThemeProvider>,
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).not.toHaveBeenCalled();
  });
});
