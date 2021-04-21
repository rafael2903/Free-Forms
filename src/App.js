/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';

import GlobalStyle from './GlobalStyles';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
          <Route exact path="/" />

          <Route path="/login">{loggedIn ? <Redirect to="/" /> : <Login />}</Route>

          <Route path="/signup">{loggedIn ? <Redirect to="/" /> : <SignUp />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
