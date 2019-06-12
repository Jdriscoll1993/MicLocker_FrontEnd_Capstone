import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
// import PropTypes from
// 'prop-types';
import ExperienceManager from '../../../modules/ExperienceManager';
export class ExperienceList extends Component {
  state = {
    experiences: []
  };

  // deleteExperience = id => {
  //   const newState = {};
  //   ExperienceManager.deleteEvent(id)
  //     .then(ExperienceManager.getAll)
  //     .then(experiences => {
  //       console.log('experiences', experiences);
  //       newState.experiences = experiences;
  //       this.setState(newState);
  //     });
  // };

  componentDidMount = () => {
    ExperienceManager.getAll('experiences').then(experiences =>
      this.setState({ experiences })
    );
  };

  render() {
    //map through the props coming from Profile.js
    return (
      <div>
        <button style={{float:"right"}}>
          <Link to="/new-experience">+</Link>
        </button>
        <section>
          {this.state.experiences.map(experience => {
            return (
              // outputting ExperienceCard
              // in order to display particular card: experience is being passed into ExperienceCard as a prop
              <ExperienceCard
                {...this.props}
                key={experience.id}
                experience={experience}
                // checkComplete={this.props.checkComplete}
                delExperience={this.props.delExperience}
                updateExperience={this.props.updateExperience}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

//PropTypes
// ExperienceList.propTypes = {
//   experiences: PropTypes.array.isRequired
// };

export default ExperienceList;
