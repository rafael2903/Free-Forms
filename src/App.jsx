import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerForms from './pages/VerForms';
import CreateForm from './pages/CreateForm';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import GlobalStyle from './GlobalStyles';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')));

  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <>
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Switch>
            {/* EU07 */}
            <PrivateRoute path="/" component={VerForms} loggedIn={loggedIn} exact />

            {/* EU05 */}
            <PrivateRoute path="/form/create" component={CreateForm} loggedIn={loggedIn} />

            {/* EU02 EU06 */}
            <PublicRoute
              path="/login"
              component={Login}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              restricted
            />

            {/* EU01 */}
            <PublicRoute
              path="/signup"
              component={SignUp}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              restricted
            />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
