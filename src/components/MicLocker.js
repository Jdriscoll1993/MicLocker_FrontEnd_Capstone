import React, { Component } from 'react';
import './MicLocker.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from '../components/ApplicationViews';
import { getUserFromLocalStorage } from '../authentication/userManager';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class MicLocker extends Component {
  state = {
    user: getUserFromLocalStorage(),
    isAuthenticated: false
  };

  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login');
    this.setState({ user: null, isAuthenticated: false });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />

          {/* JSX conditional rendering. Logic on left evaluates to true or false and renders the JSX that is to the right of && -- if logic evaluates to false, nothing is rendered and code is skipped over*/}
          {this.state.isAuthenticated && (
            <NavBar user={this.state.user} onLogout={this.logout} />
          )}

          <ApplicationViews
            onLogin={user =>
              this.setState({ user: user, isAuthenticated: true })
            }
            onLogout={this.logout}
            user={this.state.user}
            isAuthenticated={this.state.isAuthenticated}
          />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default withRouter(MicLocker);
