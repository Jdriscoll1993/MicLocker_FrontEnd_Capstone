import React, { Component } from 'react';
import UserCard from '../../social-page/other-users/UserCard';
export class FriendList extends Component {
  state = {
    followedUsers: []
  };
  // componentDidMount() {
  //   const sessionUser = JSON.parse(localStorage.getItem('user'));
  //   users.getAll(sessionUser.id).then(users => {
  //     const followedArray = [];
  //     users.forEach(user => {
  //       followedArray.push(user.user);
  //     });
  //     this.setState({ followedUsers: followedArray });
  //   });
  // }

  // unfollow = user => {
  //   users.checkForFollow(user).then(response =>
  //     users.unfollowUser(response[0].id).then(_reply => {
  //       const sessionUser = JSON.parse(localStorage.getItem('user'));
  //       users.getAll(sessionUser.id).then(users => {
  //         const followedArray = [];
  //         users.forEach(user => {
  //           followedArray.push(user.user);
  //         });
  //         this.setState({ followedUsers: followedArray });
  //       });
  //     })
  //   );
  // };

  makeAllUserCard = users => {
    if (!!this.props.followedUsers) {
      const userCard = users.map(user => (
        <div key={user.id}>
          <UserCard
            {...this.props}
            user={user}
            key={user.id}
            followed={false}
            unfollow={this.props.unfollow}
          />
        </div>
      ));
      return userCard;
    }
  };

  render() {
    return (
      <h2>
        {this.makeAllUserCard(this.props.followedUsers)}
      </h2>
    );
  }
}

export default FriendList;
