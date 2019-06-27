import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BioManager from '../../../modules/BioManager';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';
export class BioEditForm extends Component {
  state = {
    aboutMe: ''
  };

  componentDidMount() {
    BioManager.getBioById(this.props.match.params.bioId).then(bio => {
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
        <Segment>
          <Form style={{width:'500px', marginLeft: 'auto', marginRight:'auto'}}className="bioForm">
            <Form.Field widths="equal"> 
            <label style={{textAlign:'center', fontSize:'26px', marginBottom: '10px',marginTop: '90px' }}>About Me</label>
              <TextArea
                size='large'
                label="About Me"
                required
                name="aboutMe"
                id="aboutMe"
                onChange={this.handleFieldChange}
                value={this.state.aboutMe}
              />
            </Form.Field>
            <Button style={{marginBottom:'820px'}} className="button" onClick={this.updatebio}>
              Submit
            </Button>
          </Form>
        </Segment>
      </React.Fragment>
    );
  }
}

export default withRouter(BioEditForm);
