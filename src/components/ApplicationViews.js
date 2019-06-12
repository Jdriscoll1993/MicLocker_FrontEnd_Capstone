import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import Login from '../components/login-page/Login';
import Register from '../components/login-page/Register';
import Profile from '../components/user-page/Profile';
import Friends from '../components/social-page/Friends';

import ExperienceEditForm from '../components/user-page/experiences/ExperienceEditForm';
import AddExperience from '../components/user-page/experiences/AddExperience';

import MyGearEditForm from '../components/user-page/my-gear/MyGearEditForm';
import AddGear from '../components/user-page/my-gear/AddGear';

import GearWishListEditForm from '../components/user-page/wish-list/GearWishListEditForm';
import AddWishList from '../components/user-page/wish-list/AddWishList';

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
          </Router>
        </div>
      </>
    );
  }
}

export default ApplicationViews;
