import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { SignUp } from '../../pages';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
    ),
  })),
};

describe('SignIn', () => {
  it('should render <SignUp /> page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('First name'), { target: { value: 'John' } });

      await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@test.com' } });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('First name').value).toEqual('John');
      expect(getByPlaceholderText('Email address').value).toEqual('test@test.com');
      expect(getByPlaceholderText('Password').value).toEqual('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
