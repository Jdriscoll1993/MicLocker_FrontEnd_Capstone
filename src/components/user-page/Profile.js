import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Container } from 'semantic-ui-react';

import NavBar from '../layout/NavBar';
import Dashboard from '../user-page/Dashboard';

import ExperienceManager from '../../modules/ExperienceManager';
import ExperienceList from '../user-page/experiences/ExperienceList';

import GearManager from '../../modules/GearManager';
import MyGearList from '../user-page/my-gear/MyGearList';

import WishListManager from '../../modules/WishListManager';
import GearWishListList from '../user-page/wish-list/GearWishListList';

class Profile extends Component {
  //to access state: this.state.experiences
  state = {
    experiences: [],
    gearItems: [],
    wishItems: []
  };

  // LOGOUT
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };

  // GET get all data and set new state
  componentDidMount() {
    const newState = {};
    ExperienceManager.getAll()
      .then(experiences => {
        newState.experiences = experiences;
      })
      .then(() =>
        GearManager.getAll()
          .then(gearItems => {
            newState.gearItems = gearItems;
          })
          .then(() =>
            WishListManager.getAll()
              .then(wishItems => {
                newState.wishItems = wishItems;
              })
              .then(() => this.setState(newState))
          )
      );
  }

  // EXPERIENCES

  // POST - post a new experience, get all the experiences set new state, and direct the users to /home
  addExperience = experience =>
    ExperienceManager.postExperience(experience)
      .then(() => ExperienceManager.getAll('experiences'))
      .then(experiences =>
        this.setState({
          experiences: experiences
        })
      )
      .then(() => this.props.history.push('/home'));
  // DELETE - delete an existing experience based off of the id, get all th experiences, set new state, direct user to /home
  deleteExperience = id => {
    
    ExperienceManager.deleteExperience(id)
      .then(ExperienceManager.getAll)
      .then(experiences => {
        console.log(this)
        const newState = {experiences};
        this.setState(newState);
        // this.props.history.push('/home');
      });
  };

  // MY GEAR

  // POST - post a new gear item, get all the experiences set new state, and direct the users to /home
  addGearItem = gearItem =>
    GearManager.postMyGear(gearItem)
      .then(() => GearManager.getAll('gearItems'))
      .then(gearItems =>
        this.setState({
          gearItems: gearItems
        })
      )
      .then(() => this.props.history.push('/home'));
  // DELETE - delete an existing gear item based off of the id, get all th experiences, set new state, direct user to /home
  deleteGearItem = id => {
    const newState = {};
    GearManager.deleteGearItem(id)
      .then(GearManager.getAll)
      .then(gearItems => {
        newState.gearItems = gearItems;
      })
      .then(() => {
        this.setState(newState);
        this.props.history.push('/home');
      });
  };

  // WISH LIST

  // POST - post a new wish list, get all the experiences set new state, and direct the users to /home
  addWishItem = wishItem =>
    GearManager.postWishList(wishItem)
      .then(() => WishListManager.getAll('wishItems'))
      .then(wishItems =>
        this.setState({
          wishItems: wishItems
        })
      )
      .then(() => this.props.history.push('/home'));
  // DELETE - delete an existing wish list off of the id, get all the wish lists, set new state, direct user to /home
  deleteWishList = id => {
    const newState = {};
    WishListManager.deleteWishList(id)
      .then(WishListManager.getAll)
      .then(wishItems => {
        newState.wishItems = wishItems;
      })
      .then(() => {
        this.setState(newState);
        this.props.history.push('/home');
      });
  };

  render() {
    return (
      <>
        {/* semantic ui container */}
        <Container className="profile--container">
          {/* <Header /> */}
          {/* <NavBar onLogout={this.props.onLogout} /> */}
          <Dashboard />
          <h1 style={{ textAlign: 'center' }}>Experiences</h1>
          <Route
            exact
            path="/home"
            render={props => {
              return (
                <ExperienceList
                  {...props}
                  experiences={this.state.experiences}
                  deleteExperience={this.deleteExperience}
                />
              );
            }}
          />
          <h1 style={{ textAlign: 'center' }}>My Gear</h1>
          <Route
            exact
            path="/home"
            render={props => {
              return (
                <MyGearList
                  {...props}
                  gearItems={this.state.gearItems}
                  deleteGearItem={this.deleteGearItem}
                />
              );
            }}
          />
          <h1 style={{ textAlign: 'center' }}>Wish List</h1>
          <Route
            exact
            path="/home"
            render={props => {
              return (
                <GearWishListList
                  {...props}
                  wishItems={this.state.wishItems}
                  deleteWishList={this.deleteWishList}
                />
              );
            }}
          />
          {/* <Footer /> */}
        </Container>
      </>
    );
  }
}
export default withRouter(Profile);
