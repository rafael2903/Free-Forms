import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, path, loggedIn, exact, ...rest }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (loggedIn ? <Component {...props} {...rest} /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
