import React, { Component } from 'react';
import FriendsManager from '../../../modules/FriendsManager';

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
      <div>
        <h2>{this.props.user.username}</h2>
        <h2>{this.props.user.email}</h2>
        {this.props.followed ? (
          <button
            disabled={this.state.followedBySessionUser}
            onClick={this.FollowUser}
          >
            Do it
          </button>
        ) : (
          <button onClick={() => this.props.unfollow(this.props.user)}>
            unfollow
          </button>
        )}
        <button
          onClick={() => {
            this.props.history.push(`/users/${this.props.user.id}`);
          }}
        >
          Go To Profile
        </button>
      </div>
    );
  }
}
export default UserCard;
