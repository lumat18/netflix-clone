import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('Loading', () => {
  it('should render <Loading /> with populated data', () => {
    const { container, getByTestId } = render(<Loading src="/images/karl.jpg" data-testid="loading" />);
    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render <Loading.ReleaseBody />', () => {
    const { container } = render(<Loading.ReleaseBody />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
