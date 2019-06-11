import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import Login from '../components/login-page/Login';
import Register from '../components/login-page/Register';
import Profile from '../components/user-page/Profile';
import Friends from '../components/social-page/Friends';

class ApplicationViews extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Router>
            {/* login route */}
            <Route
              path="/login"
              render={props => (
                <Login {...props} onLogin={this.props.onLogin} />
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
                return this.props.user ? (
                  <Profile {...props} onLogout={this.props.onLogout} />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />

            {/* friends route */}
            <Route
              exact
              path="/friends"
              render={props => {
                return <Friends onLogout={this.props.onLogout} />;
              }}
            />
            {/* account settings */}
          </Router>
        </div>
      </>
    );
  }
}

export default ApplicationViews;
