import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Container, Grid } from 'semantic-ui-react';

// dashboard
import Dashboard from '../user-page/Dashboard';

// bio
import BioManager from '../../modules/BioManager';
import Bio from '../user-page/Bio/Bio';

// experiencesl
import ExperienceManager from '../../modules/ExperienceManager';
import ExperienceList from '../user-page/experiences/ExperienceList';

// gear list
import GearManager from '../../modules/GearManager';
import MyGearList from '../user-page/my-gear/MyGearList';

// wish list
import WishListManager from '../../modules/WishListManager';
import GearWishListList from '../user-page/wish-list/GearWishListList';

import './Profile.css';

class Profile extends Component {
  //to access state: this.state.experiences
  state = {
    experiences: [],
    gearItems: [],
    wishItems: [],
    bios: []
  };

  // LOGOUT
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };

  // GET get all data and set new state
  componentDidMount() {
    // const userId = this.props.match.params.user
    // get user id, get all persons shit
    const newState = {};
    ExperienceManager.getOneUser(this.props.user.id)
      .then(experiences => {
        newState.experiences = experiences;
      })
      .then(() =>
        GearManager.getOneUser(this.props.user.id)
          .then(gearItems => {
            newState.gearItems = gearItems;
          })
          .then(() =>
            WishListManager.getOneUser(this.props.user.id)
              .then(wishItems => {
                newState.wishItems = wishItems;
              })
              .then(() =>
                BioManager.getOneUser(this.props.user.id)
                  .then(bios => {
                    newState.bios = bios;
                  })
                  .then(() => this.setState(newState))
              )
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
  deleteExperience = (id, userId) => {
    ExperienceManager.deleteExperience(id)
      .then(() => ExperienceManager.getOneUser(userId))
      .then(experiences => {
        this.setState({
          experiences: experiences
        });
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
  deleteGearItem = (id, userId) => {
    GearManager.deleteGearItem(id)
      .then(() => GearManager.getOneUser(userId))
      .then(gearItems => {
        this.setState({
          gearItems: gearItems
        });
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
  deleteWishList = (id, userId) => {
    WishListManager.deleteWishList(id)
      .then(() => WishListManager.getOneUser(userId))
      .then(wishItems => {
        this.setState({
          wishItems: wishItems
        });
      });
  };

  render() {
    return (
      <>
        <div className="profile--container">
          <Dashboard
            user={this.props.user}
            status={this.props.status}
            buying={this.props.buying}
            selling={this.props.selling}
          />
          <Container fluid>
            <div className="bio1">
              <Bio
                {...this.props}
                bios={this.state.bios}
                user={this.props.user}
              />
            </div>
            <div style={{marginTop: '45px'}}>
              <h2 style={{ textAlign: 'center', color: 'white' }}>
                Musical Experiences
              </h2>
              <div className="experiences2">
                <ExperienceList
                  {...this.props}
                  experiences={this.state.experiences}
                  deleteExperience={this.deleteExperience}
                  user={this.props.user}
                />
              </div>
            </div>
            <div style={{marginTop: '45px'}}>
              <h2 style={{ textAlign: 'center', color: 'white' }}>My Gear</h2>
              <div className="mygear3">
                <MyGearList
                  {...this.props}
                  gearItems={this.state.gearItems}
                  deleteGearItem={this.deleteGearItem}
                  user={this.props.user}
                />
              </div>
            </div>
            <div style={{marginTop: '45px'}}>
              <h2 style={{ textAlign: 'center', color: 'white' }}>Wish List</h2>
              <div className="wishlist4">
                <GearWishListList
                  {...this.props}
                  wishItems={this.state.wishItems}
                  deleteWishList={this.deleteWishList}
                  user={this.props.user}
                />
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(Profile);
