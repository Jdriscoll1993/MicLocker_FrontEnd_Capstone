import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ExperienceManager from '../../../modules/ExperienceManager';

export class AddExperience extends Component {
  // component state -- not app level. not being shared between components
  state = {
    summary: '',
    instruments: '',
    memory: ''
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
      <form style={{ display: 'flex', flex: '5' }} onSubmit={this.onSubmit}>
        Description
        <input
          // style={{ flex: '5', padding: '5px' }}
          type="text"
          name="summary"
          id="summary"
          placeholder="Add Experience"
          value={this.state.summary}
          onChange={this.handleFieldChange}
        />
        Instruments
        <input
          // style={{ flex: '5', padding: '5px' }}
          type="text"
          name="instruments"
          id="instruments"
          placeholder="Add Instruments"
          value={this.state.instruments}
          onChange={this.handleFieldChange}
        />
        Memory
        <input
          // style={{ flex: '5', padding: '5px' }}
          type="text"
          name="memory"
          id="memory"
          placeholder="Add Memory"
          value={this.state.memory}
          onChange={this.handleFieldChange}
        />
        <button className="button" onClick={this.saveNewExperience}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(AddExperience);

// // state is being changed as onChange is fired. visible in react tools via AddExperience
// onSubmit = e => {
//   e.preventDefault();
//   this.props.addExperience(
//     this.state.summary,
//     this.state.instruments,
//     this.state.memory
//   );

//   this.setState({ summary: '', instruments: '', memory: '' });
// };
// // onChange is reusable because of name in e.target.name. Whatever the input name is equal to will allow us to receive input
// onChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
// };
