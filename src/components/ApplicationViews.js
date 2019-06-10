import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../components/login-page/Login';
import Register from '../components/login-page/Register';

export class ApplicationViews extends Component {


  render() {
    return (
      <>
        <Router>
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onLogin={user => this.setState({ user: user })}
              />
            )}
          />
          <Route
            path="/register"
            render={props => (
              <Register
                {...props}
                onRegister={user => this.setState({ user: user })}
              />
            )}
          />
        </Router>
      </>
    );
  }
}

export default ApplicationViews;
