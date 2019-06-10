import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from '../layout/Header';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';

export default class Home extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <Container className="profile--container">
        <Head />
        <NavBar />
        <Footer />
      </Container>
    );
  }
}
