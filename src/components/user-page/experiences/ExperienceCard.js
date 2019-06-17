import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
export class ExperienceCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = () => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteExperience(this.props.experience.id);
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
      <div className="experience-div" style={this.getStyle()}>
        <h3 style={{ color: 'goldenrod' }}>Description:</h3>
        <h5>{summary}</h5>
        <h3 style={{ color: 'goldenrod' }}> Instruments</h3>
        <h5>{instruments}</h5>
        <h3 style={{ color: 'goldenrod' }}> Memory</h3>
        <h5>{memory}</h5>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.history.push(
              `/experiences/edit/${this.props.experience.id}`
            );
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default withRouter(ExperienceCard);
