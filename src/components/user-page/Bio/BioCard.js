import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

export class BioCard extends Component {
  state = {
    saveDisabled: false
  };

  getStyle = () => {
    return {};
  };

  render() {
    const { aboutMe } = this.props.bio;
    return (
      <Card.Group className="bio-div">
        <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card.Content>About Me:
          <Card.Description>
          <h5>{aboutMe}</h5>
          </Card.Description>
          </Card.Content>
          <Button color="yellow"
            type="button"
            onClick={() => {
              this.props.history.push(`/bio/edit/${this.props.bio.id}`);
            }}
          >
            Edit
          </Button>
        </Card>
      </Card.Group>
    );
  }
}

export default withRouter(BioCard);
