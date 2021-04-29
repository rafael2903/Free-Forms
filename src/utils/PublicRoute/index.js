import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, path, loggedIn, exact, restricted, ...rest }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        loggedIn && restricted ? <Redirect to="/" /> : <Component {...props} {...rest} />
      }
    />
  );
}

export default PublicRoute;
