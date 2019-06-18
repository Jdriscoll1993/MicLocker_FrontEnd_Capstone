import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import FriendList from './friends/FriendList';
import UserList from './other-users/UserList';
import UserSearch from './search-users/UserSearch';
import users from '../../modules/FriendsManager';
export default class Friends extends Component {
  state = {
    allUsers: [],
    followedUsers: [],
    searchResults: [],
    searchInput: ''
  };

  componentDidMount() {
    const sessionUser = JSON.parse(localStorage.getItem('user'));
    users.getAll(sessionUser.id).then(users => {
      const followedArray = [];
      users.forEach(user => {
        followedArray.push(user.user);
      });
      this.setState({ followedUsers: followedArray });
    });
    users.getAllUsers().then(users => {
      const parsedUsers = users.filter(user => user.id !== sessionUser.id);
      this.setState({ allUsers: parsedUsers });
    });
  }

  getSearchResults = input => {
    this.setState({ searchInput: input})
    let newSearchResults = []
    users.search('users', input)
      .then(results => (newSearchResults = results))
      .then(() => this.setState({ searchResults: newSearchResults }));
    }
    

  unfollow = user => {
    users.checkForFollow(user).then(response =>
      users.unfollowUser(response[0].id).then(_reply => {
        const sessionUser = JSON.parse(localStorage.getItem('user'));
        users.getAll(sessionUser.id).then(users => {
          const followedArray = [];
          users.forEach(user => {
            followedArray.push(user.user);
          });
          this.setState({ followedUsers: followedArray });
        });
        users.getAllUsers().then(users => {
          const parsedUsers = users.filter(user => user.id !== sessionUser.id);
          this.setState({ allUsers: parsedUsers });
        });
      })
    );
  };

  addUserToFriendsList = user => {
    users.addUserToFriendsList(user);
    const sessionUser = JSON.parse(localStorage.getItem('user'));
    users.getAll(sessionUser.id).then(users => {
      const followedArray = [];
      users.forEach(user => {
        followedArray.push(user.user);
      });
      this.setState({ followedUsers: followedArray });
    });
    users.getAllUsers().then(users => {
      const parsedUsers = users.filter(user => user.id !== sessionUser.id);
      this.setState({ allUsers: parsedUsers });
    });
  };

  render() {
    return (
      <div style={{ background: '#c0ffee' }}>
        <Container className="profile--container">
          <UserSearch getSearchResults={this.getsearchResults} />
          <FriendList
            {...this.props}
            followedUsers={this.state.followedUsers}
            unfollow={this.unfollow}
          />
          <UserList
            {...this.props}
            allUsers={this.state.allUsers}
            add={this.addUserToFriendsList}
          />
        </Container>
      </div>
    );
  }
}
