import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
export class BioCard extends Component {
  state = {
    saveDisabled: false
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      marginBottom: '50px'
    };
  };

  render() {
    const { aboutMe } = this.props.bio;
    return (
      <div className="bio-div" style={this.getStyle()}>
        <h3 style={{ color: 'goldenrod' }}>About Me:</h3>
        <h5>{aboutMe}</h5>
        <button
          type="button"
          onClick={() => {
            this.props.history.push(`/bio/edit/${this.props.bio.id}`);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default withRouter(BioCard);
