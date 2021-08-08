import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('Home', () => {
  it('should render <Home />', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(<Home />);
    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  });
});
