/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

function App() {
  const [loggedIn, setloggedIn] = useState(() => JSON.parse(localStorage.getItem('loggedIn')));

  const [id, setId] = useState(() => localStorage.getItem('id'));

  const [admin, setAdmin] = useState(() => localStorage.getItem('admin'));

  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Switch>
          {/* <Header /> */}
          <Route exact path="/">
            <h1>oiee</h1>
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
