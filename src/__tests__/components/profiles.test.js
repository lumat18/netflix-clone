import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('Profiles', () => {
  it('should render <Profiles /> with populated data', () => {
    const user = {
      displayName: 'John',
      photoUrl: 'photo.png',
    };
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture src={user.photoUrl} data-testid="profile-picture" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText(user.displayName)).toBeTruthy();
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByTestId('profile-picture').src).toEqual(expect.stringContaining(user.photoUrl));
    expect(getByText("Who's watching?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show loading when user not fetched yet', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture src={undefined} data-testid="profile-picture" />
            <Profiles.Name>{undefined}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByTestId('profile-picture').src).toEqual(expect.stringContaining('/images/misc/loading.gif'));
    expect(getByText("Who's watching?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
