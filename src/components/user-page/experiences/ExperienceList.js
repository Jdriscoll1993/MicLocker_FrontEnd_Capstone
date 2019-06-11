import React, { Component } from 'react';
import APIManager from '../../../db_calls/APIManager';
import { Link } from 'react-router-dom';
import ExperienceCard from '../../user-page/experiences/ExperienceCard'
export class ExperienceList extends Component {
  state = {
    experiences: []
  };

  // componentDidMount() {
  //   const newState = {};
  //   APIManager.getAll('experiences')
  //     .then(experiences => (newState.experiences = experiences))
  //     .then(() => this.setState(newState));
  // }

  render() {
    return (
      <div className="btn-experiences">
        <button>
          <Link to="/experiences/new">Add Experience</Link>
        </button>
        <section className="experience-section">
          {this.state.experiences.map(item => {
            return (
              <ExperienceCard
                key={item.id}
                event={item}
                {...this.props}
                deleteExperience={this.deleteExperience}
              />
            );
          })}
        </section>
      </div>
      
    );
  }
}

export default ExperienceList;
