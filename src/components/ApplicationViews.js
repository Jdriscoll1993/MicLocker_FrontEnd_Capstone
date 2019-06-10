import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../components/login-page/Login';
import Register from '../components/login-page/Register';
import Home from './login-page/Profile';
import { getUserFromLocalStorage, logout } from '../authentication/userManager';
import Friends from './layout/Friends';

class ApplicationViews extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  render() {
    return (
      <div className="App">
        <Router>
          {/* login route */}
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onLogin={user => this.setState({ user: user })}
              />
            )}
          />
          {/* register route */}
          <Route
            path="/register"
            render={props => (
              <Register
                {...props}
                onRegister={user => this.setState({ user: user })}
              />
            )}
          />
          {/* logout route */}
          <Route
            exact
            path="/home"
            render={props => {
              return this.state.user ? (
                <Home {...props} user={this.state.user} onLogout={logout} />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            exact
            path="/friends"
            render={props => {
              return this.state.user ? (
                <Friends {...props} user={this.state.user} onLogout={logout} />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default ApplicationViews;
