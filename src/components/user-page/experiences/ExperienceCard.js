import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
export class ExperienceCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = () => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteExperience(
      this.props.experience.id,
      this.props.experience.userId
    );
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      border: '1px #ccc dotted',
      marginBottom: '15px'
    };
  };

  render() {
    //destructuring by pulling out particular properties so "drilling" is not needed to target props. Passing id, and summary
    const { summary, instruments, memory } = this.props.experience;
    return (
      <Card.Group>
        <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card.Content>
            <Card.Header>Experience</Card.Header>
            <Card.Description>
              <h5>{summary}</h5>
              <h3> Instruments played:</h3>
              <h5>{instruments}</h5>
              <h3> Memory of the event:</h3>
              <h5>{memory}</h5>
            </Card.Description>
          </Card.Content>
          <div className="ui two buttons">
            {this.props.loggedInUser && (
              <Button
                color="red"
                onClick={this.handleClick}
                disabled={this.state.saveDisabled}
              >
                Delete
              </Button>
            )}
            {this.props.loggedInUser && (
              <Button
                color="yellow"
                type="button"
                onClick={() => {
                  this.props.history.push(
                    `/experiences/edit/${this.props.experience.id}`
                  );
                }}
              >
                Edit
              </Button>
            )}
          </div>
        </Card>
      </Card.Group>
    );
  }
}

export default withRouter(ExperienceCard);
