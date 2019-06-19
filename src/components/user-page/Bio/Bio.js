import React, { Component } from 'react';
import BioCard from '../Bio/BioCard';
export class Bio extends Component {

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
