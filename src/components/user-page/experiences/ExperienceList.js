import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
// import ExperienceManager from '../../../modules/ExperienceManager';
export class ExperienceList extends Component {


  render() {
    //map through the props coming from Profile.js
    return (
      <div>
        <button style={{ float: 'right' }}>
          <Link to="/new-experience">+</Link>
        </button>
        <section>
          {this.props.experiences.map(experience => {
            return (
              // outputting ExperienceCard
              // in order to display particular card: experience is being passed into ExperienceCard as a prop
              <ExperienceCard
                {...this.props}
                key={experience.id}
                experience={experience}
                // checkComplete={this.props.checkComplete}
                delExperience={this.props.delExperience}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default ExperienceList;
