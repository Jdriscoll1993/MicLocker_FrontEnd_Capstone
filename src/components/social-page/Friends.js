import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import FriendList from './friends/FriendList';
import UserList from './other-users/UserList';
import UserCard from './other-users/UserCard'
import FriendsManager from '../../modules/FriendsManager';
import './Friends.css';
import { Grid } from 'semantic-ui-react';

export default class Friends extends Component {
  state = {
    followedUsers: [],
    searchResults: []
  };

  componentDidMount() {
    this.parsedUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.parsedUser();
    }
  }

  unfollow = user => {
    FriendsManager.checkForFollow(user).then(response =>
      FriendsManager.unfollowUser(response[0].id).then(_reply => {
        const sessionUser = JSON.parse(localStorage.getItem('user'));

        FriendsManager.getAll(sessionUser.id).then(users => {
          const followedArray = [];
          users.forEach(user => {
            followedArray.push(user.user);
          });
          this.setState({ followedUsers: followedArray });
        });
      })
    );
  };

  makeAllUserCard = () => {
    if (!!this.state.followedUsers) {
      const userCard = this.state.followedUsers.map(user => (
        <div key={user.id}>
          <UserCard
            {...this.props}
            user={user}
            key={user.id}
            followed={false}
            unfollow={this.unfollow}
          />
        </div>
      ));
      return userCard;
    }
  };

  addUserToFriendsList = user => {
    FriendsManager.addUserToFriendsList(user).then(data => {
      const sessionUser = JSON.parse(localStorage.getItem('user'));
      FriendsManager.getAll(sessionUser.id).then(users => {
        const followedArray = [];
        users.forEach(user => {
          followedArray.push(user.user);
        });
        this.setState({ followedUsers: followedArray });
        FriendsManager.getAllUsers().then(users => {
          const parsedUsers = users.filter(user => user.id !== sessionUser.id);
          this.setState({ allUsers: parsedUsers });
        });
      });
    });
  };

  parsedUser = () => {
    const sessionUser = JSON.parse(localStorage.getItem('user'));
    const followedArray = [];
    FriendsManager.getAll(sessionUser.id)
      .then(users => {
        users.forEach(user => {
          followedArray.push(user.user);
        });
      })
      .then(() => {
        const parsedUsers = followedArray.filter(
          user => user.id !== sessionUser.id
        );
        this.setState({ allUsers: parsedUsers, followedUsers: followedArray });
      });
  };
  render() {
    return (
      <div>
        <Grid columns={2} padded className="friends--container">
          <Grid.Column floated="left" width={5}>
            {/* <UserSearch getSearchResults={this.getsearchResults} /> */}
            <FriendList
              {...this.props}
              followedUsers={this.state.followedUsers}
              unfollow={this.unfollow}
              makeAllUserCard={this.makeAllUserCard}
            />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <UserList
              {...this.props}
              allUsers={this.props.allUsers}
              add={this.addUserToFriendsList}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
