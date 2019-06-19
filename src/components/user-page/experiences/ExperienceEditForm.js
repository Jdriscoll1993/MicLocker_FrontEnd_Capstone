import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import ExperienceManager from '../../../modules/ExperienceManager'

export class ExperienceEditForm extends Component {
  state = {
    summary: '',
    instruments: '',
    memory: ''
  };

  componentDidMount() {
    ExperienceManager.getExpById(this.props.match.params.experienceId).then(experience => {
      this.setState({
        summary: experience.summary,
        instruments: experience.instruments,
        memory: experience.memory
      });
    });
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
        <form className="experienceForm">
          <div className="form-group">
            <label htmlFor="experience-summary">Experience Summary</label>
            <input
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
            <label htmlFor="experience-instruments">Instruments</label>
            <input
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
            <label htmlFor="experience-memory">Memory</label>
            <input
              type="text"
              required
              className="form-control"
              name="memory"
              id="memory"
              onChange={this.handleFieldChange}
              value={this.state.memory}
            />
          </div>
          <button className="button" onClick={this.updateExperience}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(ExperienceEditForm);
