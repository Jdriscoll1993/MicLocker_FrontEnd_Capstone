import React, { Component } from 'react';
import './MicLocker.css';
import ApplicationViews from '../components/ApplicationViews';
import { getUserFromLocalStorage } from '../authentication/userManager';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/layout/NavBar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

class MicLocker extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  logout = () => {
    
    localStorage.removeItem('user');
    this.props.history.push('/login');
    this.setState({ user: null });
  };


  render() {
    return (
      <React.Fragment>
        <Header/>
        <NavBar onLogout={this.logout}/>
        <ApplicationViews 
          onLogin={user => this.setState({ user: user })}
          onLogout={this.logout}
          user={this.state.user}
        />
        <Footer/>
      </React.Fragment>
    );
  }
}
export default withRouter(MicLocker);
