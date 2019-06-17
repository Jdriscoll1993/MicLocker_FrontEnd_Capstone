import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BioManager from '../../../modules/BioManager';

export class BioEditForm extends Component {
  state = {
    aboutMe: ''
  };

  componentDidMount() {
    BioManager.get(this.props.match.params.bioId).then(bio => {
      this.setState({
        aboutMe: bio.aboutMe
      });
    });
  }

  handleFieldChange = bio => {
    const stateToChange = {};
    stateToChange[bio.target.id] = bio.target.value;
    this.setState(stateToChange);
  };

  updatebio = exp => {
    exp.preventDefault();
    const editedBio = {
      id: this.props.match.params.bioId,
      aboutMe: this.state.aboutMe
    };
    console.log('edited bio', editedBio);
    BioManager.putBio(editedBio).then(() => this.props.history.push('/home'));
  };

  render() {
    return (
      <React.Fragment>
        {/* Bio Edit Form */}
        
        <form 
        className="bioForm">
          <div className="form-group">
            <label htmlFor="bio-aboutMe">About Me</label>
            <input
              type="text-area"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              name="aboutMe"
              id="aboutMe"
              value={this.state.aboutMe}
            />
          </div>
          <button className="button" onClick={this.updatebio}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(BioEditForm);
