import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { withTheme } from 'utils';
import { ThemeModeSwitch } from '.';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
};

describe('ThemeModeSwitch test', () => {
  it('should calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(withTheme(<ThemeModeSwitch />));
    fireEvent.click(getByTestId('ThemeModeSwitch'));
    expect(onClick).toHaveBeenCalled();
  });
});
