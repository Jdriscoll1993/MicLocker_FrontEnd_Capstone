import React, { Component } from 'react';
import FriendsManager from '../../../modules/FriendsManager';
import { Container, Card, Button, Icon } from 'semantic-ui-react';

class UserCard extends Component {
  state = {
    followedBySessionUser: false
  };
  componentDidMount() {
    FriendsManager.checkForFollow(this.props.user).then(response => {
      if (response.length > 0) {
        this.setState({
          followedBySessionUser: true
        });
      }
    });
  }

  FollowUser = () => {
    this.props.add(this.props.user);
    this.setState({
      followedBySessionUser: true
    });
  };

  render() {
    return (
      <Container>
        <Card fluid>
          <Card.Content width={10}>
            <h2>{this.props.user.username}</h2>
            <h2>{this.props.user.email}</h2>
          </Card.Content>
          {this.props.followed ? (
            <Button
              color="black"
              animated="fade"
              disabled={this.state.followedBySessionUser}
              onClick={this.FollowUser}
            >
              <Button.Content visible> Follow User</Button.Content>
              <Button.Content hidden>
                <Icon size="large" loading name="asterisk" />
              </Button.Content>
            </Button>
          ) : (
            <Button
              animated="fade"
              secondary
              onClick={() => this.props.unfollow(this.props.user)}
            >
              <Button.Content visible> Unfollow</Button.Content>
              <Button.Content hidden>
                <Icon size="large" loading name="frown" />
              </Button.Content>
            </Button>
          )}
          <Button
          
            onClick={() => {
              this.props.history.push(`/users/${this.props.user.id}`);
            }}
          ><Icon animated='fade' size="large" name="universal access" />
            Go To Profile
          </Button>
        </Card>
      </Container>
    );
  }
}
export default UserCard;
