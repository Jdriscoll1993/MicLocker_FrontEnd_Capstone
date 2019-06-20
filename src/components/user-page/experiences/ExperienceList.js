import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
import * as userManager from '../../../authentication/userManager';
import { List, Button } from 'semantic-ui-react';

export class ExperienceList extends Component {
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    //map through the props coming from Profile.js
    return (
      
        <div>
          <Button color="green">
            <Link to="/new-experience">Add experience</Link>
          </Button>

          <section>
            {this.props.experiences.map(experience => {
              return (
                <ExperienceCard
                  {...this.props}
                  key={experience.id}
                  experience={experience}
                  delExperience={this.props.delExperience}
                  user={this.props.user}
                />
              );
            })}
          </section>
        </div>
      
    );
  }
}

export default ExperienceList;

// outputting ExperienceCard
// in order to display particular card: experience is being passed into ExperienceCard as a prop
