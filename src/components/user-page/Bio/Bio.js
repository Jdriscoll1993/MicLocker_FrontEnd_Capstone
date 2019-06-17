import React, { Component } from 'react';
import BioCard from '../Bio/BioCard';
// import ExperienceManager from '../../../modules/ExperienceManager';
import * as userManager from '../../../authentication/userManager';
export class Bio extends Component {
  // state = {
  //   user: {}
  // };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    //map through the props coming from Profile.js
    return (
      <section>
        {this.props.bios.map(bio => {
          if (this.props.user.id === bio.userId) {
            return (
              <BioCard
                {...this.props}
                key={bio.id}
                bio={bio}
                user={this.props.user}
              />
            );
          }
        })}
      </section>
    );
  }
}

export default Bio;
