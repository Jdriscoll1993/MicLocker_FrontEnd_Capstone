import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ExperienceManager from '../../../modules/ExperienceManager';
import * as userManager from '../../../authentication/userManager';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

export class AddExperience extends Component {
  state = {
    summary: '',
    instruments: '',
    memory: '',
    userId: ''
  };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ userId: userInfo.id });
  };

  // Update state whenever an input field is edited
  handleFieldChange = exp => {
    const stateToChange = {};
    stateToChange[exp.target.id] = exp.target.value;
    this.setState(stateToChange);
  };

  saveNewExperience = exp => {
    exp.preventDefault();
    const experience = {
      summary: this.state.summary,
      instruments: this.state.instruments,
      memory: this.state.memory
    };

    ExperienceManager.postExperience(experience).then(() =>
      this.props.history.push('/home')
    );
  };

  render() {
    return (
      <Segment>
                <label
                style={{
                  textAlign: 'center',
                  fontSize: '36px',
                  marginBottom: '45px',
                  marginTop: '90px'
                }}
              >
                
                Add Experience
              </label>
        <Form
          style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop:'90px' }}
          onSubmit={this.onSubmit}
        >
          <label
            style={{
              textAlign: 'center',
              fontSize: '26px',
              marginBottom: '10px',
              marginTop: '90px'
            }}
          >
            Experience Summary
          </label>
          <TextArea
            type="text"
            name="summary"
            id="summary"
            placeholder="Add Experience"
            value={this.state.summary}
            onChange={this.handleFieldChange}
          />
          <label
            style={{
              textAlign: 'center',
              fontSize: '26px',
              marginBottom: '10px',
              marginTop: '10px'
            }}
          >
            Instruments
          </label>
          <TextArea
            // style={{ flex: '5', padding: '5px' }}
            type="text"
            name="instruments"
            id="instruments"
            placeholder="Add Instruments"
            value={this.state.instruments}
            onChange={this.handleFieldChange}
          />
          <label
            style={{
              textAlign: 'center',
              fontSize: '26px',
              marginBottom: '10px',
              marginTop: '10px'
            }}
          >
            Memory
          </label>
          <TextArea
            // style={{ flex: '5', padding: '5px' }}
            type="text"
            name="memory"
            id="memory"
            placeholder="Add Memory"
            value={this.state.memory}
            onChange={this.handleFieldChange}
          />
          <Button
            style={{ marginBottom: '820px' }}
            className="button"
            onClick={this.saveNewExperience}
          >
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(AddExperience);
