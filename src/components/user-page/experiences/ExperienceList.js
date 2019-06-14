import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
// import ExperienceManager from '../../../modules/ExperienceManager';
import * as userManager from '../../../authentication/userManager';
export class ExperienceList extends Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    //map through the props coming from Profile.js
    return (
      <div>
        <button style={{ float: 'right' }}>
          <Link to="/new-experience">+</Link>
        </button>
        <section>
          {this.props.experiences.map(experience => {
            if (this.state.user.id === experience.userId) {
              return (
                <ExperienceCard
                  {...this.props}
                  key={experience.id}
                  experience={experience}
                  delExperience={this.props.delExperience}
                />
              );
            }
          })}
        </section>
      </div>
    );
  }
}

export default ExperienceList;

// outputting ExperienceCard
// in order to display particular card: experience is being passed into ExperienceCard as a prop
