import React, { Component } from 'react';
import BioCard from '../Bio/BioCard';
// import ExperienceManager from '../../../modules/ExperienceManager';
export class Bio extends Component {
  render() {
    //map through the props coming from Profile.js
    return (
      <section>
        {this.props.bios.map(bio => {
          return <BioCard {...this.props} key={bio.id} bio={bio} />;
        })}
      </section>
    );
  }
}

export default Bio;
