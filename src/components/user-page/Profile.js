import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Container } from 'semantic-ui-react';

import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Dashboard from '../user-page/Dashboard';
import Footer from '../layout/Footer';

import ExperienceManager from '../../modules/ExperienceManager';
import ExperienceList from '../user-page/experiences/ExperienceList';
import AddExperience from '../user-page/experiences/AddExperience';

// import Bio from './Bio/Bio';
// import MyGear from './my-gear/MyGearList';
// import WishList from './wish-list/GearWishListList';
class Profile extends Component {
  //to access state: this.state.experiences
  state = {
    experiences: []
  };

// logout function
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };
// get all experiences and set new state
  componentDidMount() {
    ExperienceManager.getAll().then(allExperiences => {
      this.setState({
        experiences: allExperiences
      });
    });
  }
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
    const newState = {};
    ExperienceManager.deleteExperience(id)
      .then(ExperienceManager.getAll)
      .then(experiences => {
        newState.experiences = experiences;
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
          <Header />
          <NavBar onLogout={this.props.onLogout} />
          <Dashboard />
          <AddExperience addExperience={this.addExperience} />
          <Route
            exact
            path="/home"
            render={props => {
              return (
                <ExperienceList
                  experiences={this.state.experiences}
                  {...props}
                  deleteExperience={this.deleteExperience}
                />
              );
            }}
          />
          {/* <Route
              exact
              path="/experiences/new"
              render={props => {
                return (
                  <AddExperience
                    {...props}
                    experiences={this.state.experiences}
                    addExperience={this.addExperience}
                  />
                );
              }}
            /> */}
          <Footer />
        </Container>
      </>
    );
  }
}
export default withRouter(Profile);

//TOGGLE COMPLETE
//changing the state of experience based off it was a fun experience or not. Passing id through from

// checkComplete = id => {
//   console.log(id, 'checkComplete from profile.js');
//   // setting state when mapping through experiences state, and writing a conditional statement to see if experience id matches the id we are passing through the checkComplete function.
//   this.setState({
//     experiences: this.state.experiences.map(experience => {
//       if (experience.id === id) {
//         // toggling between whether or not the experience is fun or not and returning that experience
//         experience.isFun = !experience.isFun;
//       }
//       return experience;
//     })
//   });
// };

// Delete Experience
// only want to experiences that don't match id thats passed in bc we want to delete that one
// delExperience = id => {
//   this.setState({
//     experiences: [
//       ...this.state.experiences.filter(experience => experience.id !== id)
//     ]
//   });
//   //filter out the one we're deleting
// };

// // Add Experience
// // Need to add to our state with setState and spread operator. cant simply change it, have to make a copy of it
// addExperience = (summary, instruments, memory) => {
//   const newExperience = {
//     id: 4,
//     summary,
//     instruments,
//     memory,
//     isFun: false
//   };
//   this.setState({ experiences: [...this.state.experiences, newExperience] });
// };

// addExperience = experience =>
//   ExperienceManager.post(experience)
//     .then(() => ExperienceManager.getAll('experiences'))
//     .then(experiences =>
//       this.setState({
//         experiences: experiences
//       })
//     )
//     .then(() => this.props.history.push('/experiences'));
