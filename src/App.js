/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';

import GlobalStyle from './GlobalStyles';
import { isAdministrator, isLoggedIn } from './services/auth';

function App() {
  const [loggedIn, setloggedIn] = useState(() => isLoggedIn());
  const [admin, setAdmin] = useState(() => isAdministrator());

  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>oieee</h1>
          </Route>

          {/* <Route path="/login">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login setloggedIn={setloggedIn} setId={setId} setAdmin={setAdmin} />
            )}
          </Route> */}

          {/* <Route path="/signup">{loggedIn ? <Redirect to="/" /> : <SignUp />}</Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
