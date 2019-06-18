import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Container } from 'semantic-ui-react';

// dashboard
import Dashboard from '../user-page/Dashboard';

// bio
import BioManager from '../../modules/BioManager';
import Bio from '../user-page/Bio/Bio';

// experiences
import ExperienceManager from '../../modules/ExperienceManager';
import ExperienceList from '../user-page/experiences/ExperienceList';

// gear list
import GearManager from '../../modules/GearManager';
import MyGearList from '../user-page/my-gear/MyGearList';

// wish list
import WishListManager from '../../modules/WishListManager';
import GearWishListList from '../user-page/wish-list/GearWishListList';

import users from '../../modules/FriendsManager';
class OthersProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      experiences: [],
      gearItems: [],
      wishItems: [],
      bios: []
    };
  }

  // GET get all data and set new state
  componentDidMount() {
    console.log(this.props.match.params);
    const thisUser = this.props.match.params.userId;
    users.getUser(thisUser).then(user => {
      this.setState({ user });
    });
    this.setState({ user: this.props.user });
    const newState = {};
    ExperienceManager.getOneUser(thisUser)
      .then(experiences => {
        newState.experiences = experiences;
        console.log(newState);
      })
      .then(() =>
        GearManager.getOneUser(thisUser)
          .then(gearItems => {
            newState.gearItems = gearItems;
          })
          .then(() =>
            WishListManager.getOneUser(thisUser)
              .then(wishItems => {
                newState.wishItems = wishItems;
              })
              .then(() =>
                BioManager.getOneUser(thisUser)
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
      .then(ExperienceManager.getOneUser(userId))
      .then(experiences => {
        console.log(this);
        const newState = { experiences };
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
        <div className="profile-style">
          <Dashboard user={this.state.user} />
          <Container fluid>
            <div className="bio1">
              <Bio
                {...this.props}
                bios={this.state.bios}
                // user={this.props.user}
              />
            </div>

            <div className="experiences2">
              <ExperienceList
                {...this.props}
                experiences={this.state.experiences}
                deleteExperience={this.deleteExperience}
                // user={this.props.user}
              />
            </div>

            <div className="mygear3">
              <MyGearList
                {...this.props}
                gearItems={this.state.gearItems}
                deleteGearItem={this.deleteGearItem}
                // user={this.props.user}
              />
            </div>

            <div className="wishlist4">
              <GearWishListList
                // user={this.props.user}
                {...this.props}
                wishItems={this.state.wishItems}
                deleteWishList={this.deleteWishList}
              />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(OthersProfiles);
