import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
import * as userManager from '../../../authentication/userManager';
import { Button } from 'semantic-ui-react';

export class ExperienceList extends Component {
  state = {
    loggedInUser: false
  };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.checkedForLoggedInUser();
    this.setState({ user: userInfo });
  };

  checkedForLoggedInUser = () => {
    if (this.props.location.pathname.endsWith('home')) {
      this.setState({ loggedInUser: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.loggedInUser && (
          <Button>
            <Link to="/new-experience">Add experience</Link>
          </Button>
        )}
        <section>
          {this.props.experiences.map(experience => {
            return (
              <ExperienceCard
                {...this.props}
                key={experience.id}
                experience={experience}
                deleteExperience={this.props.deleteExperience}
                user={this.props.user}
                loggedInUser={this.state.loggedInUser}
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
