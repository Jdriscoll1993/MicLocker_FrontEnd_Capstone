import React, { Component } from 'react';
import BioCard from '../Bio/BioCard';
import BioManager from '../../../modules/BioManager';
// import ExperienceManager from '../../../modules/ExperienceManager';
// import * as userManager from '../../../authentication/userManager';
export class Bio extends Component {

  // componentDidMount = () => {
  //   let userInfo = userManager.getUserFromLocalStorage();
  //   this.setState({ user: userInfo });
  // };

  render() {
    //map through the props coming from Profile.js
    return (
      <section>
        {this.props.bios.map(bio => {
          return (
            <BioCard
              {...this.props}
              key={bio.id}
              bio={bio}
              user={this.props.user}
            />
          );
        })}
      </section>
    );
  }
}

export default Bio;
