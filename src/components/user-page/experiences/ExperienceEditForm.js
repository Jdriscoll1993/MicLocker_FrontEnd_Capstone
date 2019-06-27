import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ExperienceManager from '../../../modules/ExperienceManager';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';
export class ExperienceEditForm extends Component {
  state = {
    summary: '',
    instruments: '',
    memory: ''
  };

  componentDidMount() {
    ExperienceManager.getExpById(this.props.match.params.experienceId).then(
      experience => {
        this.setState({
          summary: experience.summary,
          instruments: experience.instruments,
          memory: experience.memory
        });
      }
    );
  }

  handleFieldChange = exp => {
    const stateToChange = {};
    stateToChange[exp.target.id] = exp.target.value;
    this.setState(stateToChange);
  };

  updateExperience = exp => {
    exp.preventDefault();
    const editedExperience = {
      id: this.props.match.params.experienceId,
      summary: this.state.summary,
      instruments: this.state.instruments,
      memory: this.state.memory
    };
    console.log('edited experience', editedExperience);
    ExperienceManager.putExperience(editedExperience).then(() =>
      this.props.history.push('/home')
    );
  };

  render() {
    return (
      <React.Fragment>
        {/* Experience Edit Form */}
        <Segment>
          <label
            style={{
              textAlign: 'center',
              fontSize: '36px',
              marginBottom: '45px',
              marginTop: '90px'
            }}
          >
            {' '}
            Edit Experience
          </label>
          <Form
            style={{
              width: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '90px'
            }}
            className="experienceForm"
          >
            <div className="form-group">
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
                type="text-area"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                name="summary"
                id="summary"
                value={this.state.summary}
              />
            </div>
            <div className="form-group">
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
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                name="instruments"
                id="instruments"
                value={this.state.instruments}
              />
            </div>
            <div className="form-group">
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
                type="text"
                required
                className="form-control"
                name="memory"
                id="memory"
                onChange={this.handleFieldChange}
                value={this.state.memory}
              />
            </div>
            <Button
              style={{ marginBottom: '820px' }}
              className="button"
              onClick={this.updateExperience}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </React.Fragment>
    );
  }
}

export default withRouter(ExperienceEditForm);
