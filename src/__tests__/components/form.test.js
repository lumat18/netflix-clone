import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('Form', () => {
  it('should render <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email address" onChange={() => {}} />
          <Form.Input type="password" placeholder="Password" onChange={() => {}} />
          <Form.Submit disabled type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix? <Form.Link to="/sign-up">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
    ).toBeTruthy();

    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render <Form /> with error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is invalid.</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText('Your email address is invalid.')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
