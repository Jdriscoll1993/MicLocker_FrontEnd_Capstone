import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import Login from '../components/login-page/Login';
import Register from '../components/login-page/Register';
import Profile from '../components/user-page/Profile';
import Friends from '../components/social-page/Friends';
//experience add and edit forms
import ExperienceEditForm from '../components/user-page/experiences/ExperienceEditForm';
import AddExperience from '../components/user-page/experiences/AddExperience';
//my gear add and edit forms
import MyGearEditForm from '../components/user-page/my-gear/MyGearEditForm';
import AddGear from '../components/user-page/my-gear/AddGear';
//wish list add and edit forms
import GearWishListEditForm from '../components/user-page/wish-list/GearWishListEditForm';
import AddWishList from '../components/user-page/wish-list/AddWishList';
//bio edit form
import BioEditForm from '../components/user-page/Bio/BioEditForm';

import BioManager from '../modules/BioManager';

import users from '../modules/FriendsManager';

import OthersProfiles from '../components/social-page/OthersProfiles';
// import ExperienceManager from '../modules/ExperienceManager';
class ApplicationViews extends Component {
  state = {
    allUsers: []
  };

  componentDidMount() {
    users.getAllUsers().then(allUsers => {
      this.setState(allUsers);
    });
  }

  onRegister = user => {
    const newBio = { userId: user.id, aboutMe: 'Please write about yourself' };
    BioManager.postBio(newBio).then(newBio => {
      console.log(newBio);
      // this.setState({
      //   user: user
      // });
    });
    // const newExp = {userId:user.id, summary:"hey", instruments:"yo", memory:"sup"}
    // ExperienceManager.postExperience(newExp).then(newExp => {
    //   console.log(newExp)
    // })
  };

  isAuthenticated = () => localStorage.getItem('user') !== null;

  render() {
    return (
      <>
        <div className="App">
          {/* login route */}
          <Route
            path="/login"
            render={props => <Login {...props} onLogin={this.props.onLogin} />}
          />
          {/* register route */}
          <Route
            path="/register"
            render={props => (
              <Register {...props} onRegister={user => this.onRegister(user)} />
            )}
          />
          {/* logout route */}
          <Route
            exact
            path="/home"
            render={props => {
              return this.props.user ? (
                <Profile
                  {...props}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
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
              return (
                <Friends
                  {...props}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
              );
            }}
          />
          <Route
            exact
            path="/new-experience"
            render={props => {
              return (
                <AddExperience
                  {...props}
                  experiences={this.props.experiences}
                  addExperience={this.addExperience}
                />
              );
            }}
          />
          {/* experience edit form*/}
          <Route
            path="/experiences/edit/:experienceId"
            render={props => {
              return (
                <ExperienceEditForm
                  {...props}
                  experiences={this.props.experiences}
                  updateExperience={this.updateExperience}
                />
              );
            }}
          />
          <Route
            exact
            path="/new-gear"
            render={props => {
              return (
                <AddGear
                  {...props}
                  gearItems={this.props.gearItems}
                  gearItem={this.gearItem}
                />
              );
            }}
          />
          <Route
            path="/gearItems/edit/:gearItemId"
            render={props => {
              return (
                <MyGearEditForm
                  {...props}
                  gearItems={this.props.gearItems}
                  updateGearItem={this.updateGearItem}
                />
              );
            }}
          />
          <Route
            exact
            path="/new-wishlist"
            render={props => {
              return (
                <AddWishList
                  {...props}
                  wishItems={this.props.wishItems}
                  wishItem={this.wishItem}
                />
              );
            }}
          />
          <Route
            path="/wishItems/edit/:wishItemId"
            render={props => {
              return (
                <GearWishListEditForm
                  {...props}
                  wishItems={this.props.wishItems}
                  updateWishItem={this.updateWishItem}
                />
              );
            }}
          />
          <Route
            path="/bio/edit/:bioId"
            render={props => {
              return <BioEditForm {...props} bios={this.props.bios} />;
            }}
          />
          <Route
            exact
            path="/users/:userId"
            render={props => {
              if (this.isAuthenticated()) {
                let user = this.state.allUsers.find(
                  user => user.id === props.match.params.id 
                );
                if (!user) {
                  user = {
                    email: null,
                    username: null,
                    password: null,
                    id: null,
                    image: null,
                    photo: null,
                    status: null,
                    buying: null,
                    selling: null
                  };
                }
                return <OthersProfiles {...props} user={this.props.user} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
        </div>
      </>
    );
  }
}

export default ApplicationViews;
