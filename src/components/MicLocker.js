import React, { Component } from 'react';
import './MicLocker.css';
import ApplicationViews from '../components/ApplicationViews';
import Home from '../components/login-page/Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { getUserFromLocalStorage, logout } from '../authentication/userManager';

export class MicLocker extends Component {

  state = {
    user: getUserFromLocalStorage()
  };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => {
            return this.state.user ? (
              <Home {...props} user={this.state.user} onLogout={logout} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <ApplicationViews />
      </Router>
    );
  }
}
export default MicLocker;
