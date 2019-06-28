import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

import * as userManager from '../../../authentication/userManager';
export class BioCard extends Component {
  state = {
    saveDisabled: false,
    loggedInUser: false
  };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.checkedForLoggedInUser();
    this.setState({ user: userInfo });
  };

  getStyle = () => {
    return {};
  };

  checkedForLoggedInUser = () => {
    if (this.props.location.pathname.endsWith('home')) {
      this.setState({ loggedInUser: true });
    }
  };

  render() {
    const { aboutMe } = this.props.bio;
    return (
      <Card.Group className="bio-div">
        <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card.Content>
            <h2 style={{ textAlign: 'center' }}>About Me:</h2>
            <Card.Description>
              <h5>{aboutMe}</h5>
            </Card.Description>
          </Card.Content>
          {this.state.loggedInUser && (
          <Button
            color="yellow"
            type="button"
            onClick={() => {
              this.props.history.push(`/bio/edit/${this.props.bio.id}`);
            }}
            
          >
            Edit
          </Button>
          )}
        </Card>
      </Card.Group>
    );
  }
}

export default withRouter(BioCard);
