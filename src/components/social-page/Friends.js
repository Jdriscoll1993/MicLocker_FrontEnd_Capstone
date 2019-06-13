import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
// import Header from '../layout/Header';
// import Footer from '../layout/Footer';
// import NavBar from '../layout/NavBar';
import FriendList from './friends/FriendList'
import UserList from './other-users/UserList'
import UserSearch from './search-users/UserSearch'
export default class Friends extends Component {

  // // LOGOUT
  // logout = () => {
  //   this.props.onLogout();
  //   this.props.history.push('/login');
  // };

  render() {
    return (
      <Container className="profile--container">
        {/* <Header /> */}
        {/* <NavBar onLogout={this.props.onLogout}/> */}
        <UserSearch/>
        <FriendList/>
        <UserList/>
        {/* <Footer /> */}
      </Container>
    );
  }
}
