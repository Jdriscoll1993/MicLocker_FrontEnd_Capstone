import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import FriendList from './friends/FriendList';
import UserList from './other-users/UserList';
import FriendsManager from '../../modules/FriendsManager';
import './Friends.css'
export default class Friends extends Component {
  state = {
    followedUsers: [],
    searchResults: []
  };

  componentDidMount() {
    this.parsedUser();
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.parsedUser()
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
        FriendsManager.getAllUsers().then(users => {
          const parsedUsers = users.filter(user => user.id !== sessionUser.id);
          this.setState({ allUsers: parsedUsers });
        });
      })
    );
  };

  addUserToFriendsList = user => {
    FriendsManager.addUserToFriendsList(user);
    const sessionUser = JSON.parse(localStorage.getItem('user'));
    FriendsManager.getAll(sessionUser.id).then(users => {
      const followedArray = [];
      users.forEach(user => {
        followedArray.push(user.user);
      });
      this.setState({ followedUsers: followedArray });
    });
    FriendsManager.getAllUsers().then(users => {
      const parsedUsers = users.filter(user => user.id !== sessionUser.id);
      this.setState({ allUsers: parsedUsers });
    });
  };

  parsedUser = () => {
    const sessionUser = JSON.parse(localStorage.getItem('user'));
    const followedArray = [];
    FriendsManager.getAll(sessionUser.id)
    .then(users => {
      users.forEach(user => {
        followedArray.push(user.user)
      });
    }).then(()=> {
      const parsedUsers = followedArray.filter(user => user.id !== sessionUser.id);
      this.setState({ allUsers: parsedUsers, followedUsers: followedArray });
    })
  };
  render() {
    return (
      <div className="friends--container">
        <Container>
          {/* <UserSearch getSearchResults={this.getsearchResults} /> */}
          <FriendList
            {...this.props}
            followedUsers={this.state.followedUsers}
            unfollow={this.unfollow}
          />
          <UserList
            {...this.props}
            allUsers={this.props.allUsers}
            add={this.addUserToFriendsList}
          />
        </Container>
      </div>
    );
  }
}
