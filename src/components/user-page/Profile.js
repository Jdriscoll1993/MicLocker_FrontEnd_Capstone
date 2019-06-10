import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import Head from '../layout/Header';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import Dashboard from '../user-page/Dashboard'
import Bio from './Bio/Bio';
import ExperienceList from '../user-page/experiences/ExperienceList'
import MyGear from './my-gear/MyGearList';
import WishList from './wish-list/GearWishListList';
export default class Profile extends Component {

  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  }
  render() {
    return (
      <Container className="profile--container">
        <Head />
        <NavBar />
       <Button
            onClick={() => this.logout()}
            content="Log Out"
            color="purple" />
        <Dashboard />
        <Bio />
        <ExperienceList />
        <MyGear />
        <WishList />
        <Footer />
      </Container>
    );
  }
}
