import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, SignUp, SignIn } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

import * as ROUTES from './constants/routes';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Route exact path={ROUTES.SIGN_UP}>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
          <SignUp />
        </IsUserRedirect>
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
          <SignIn />
        </IsUserRedirect>
      </Route>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
