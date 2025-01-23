import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
