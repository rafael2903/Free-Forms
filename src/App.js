import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';

import GlobalStyle from './GlobalStyles';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerForms from './pages/VerForms';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')));

  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <>
          <Header setLoggedIn={setLoggedIn} />
          <Switch>
            <Route exact path="/">
              {loggedIn ? <></> : <Redirect to="/login" />}
            </Route>

            {/* EU02 EU06 */}
            <Route path="/login">
              {loggedIn ? <Redirect to="/" /> : <Login setLoggedIn={setLoggedIn} />}
            </Route>

            {/* EU01 */}
            <Route path="/signup">
              {loggedIn ? <Redirect to="/" /> : <SignUp setLoggedIn={setLoggedIn} />}
            </Route>

            <Route path="/verforms">
              {loggedIn ? <Redirect to="/" /> : <VerForms setLoggedIn={setLoggedIn} />}
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
