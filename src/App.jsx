import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerForms from './pages/VerForms';
import CreateForm from './pages/CreateForm';
import FormAssigned from './pages/FormAssigned';
import ViewForm from './pages/ViewForm';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import GlobalStyle from './GlobalStyles';
import { isAdministrator } from './services/auth';
import ViewForms from './pages/ViewForms';
import Users from './pages/Users';
import Divider from './pages/Divider';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')));
  const isAdmin = isAdministrator();

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
            <PrivateRoute path="/forms/create" component={CreateForm} loggedIn={loggedIn} />

            {/* EU04 */}
            <PublicRoute path="/forms/:id/view" component={ViewForm} />

            {/* EU08 EU10 */}
            <PrivateRoute path="/forms/:id" component={Divider} loggedIn={loggedIn} />

            {/* EU16 */}
            <PrivateRoute path="/assigned" component={FormAssigned} loggedIn={loggedIn} />

            {/* EU15 */}
            <PrivateRoute path="/forms" component={ViewForms} loggedIn={isAdmin} />

            {/* EU14 */}
            <PrivateRoute path="/users" component={Users} loggedIn={isAdmin} />

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
