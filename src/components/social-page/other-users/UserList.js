import React, { Component } from 'react';
// import users from '../../../modules/FriendsManager';
import UserCard from './UserCard';
export class UserList extends Component {
  state = {
    allUsers: []
  };
  // componentDidMount() {
  //   // filters out current user so they are not displayed on user list
  //   const sessionUser = JSON.parse(localStorage.getItem('user'));
  //   users.getAllUsers().then(users => {
  //     const parsedUsers = users.filter(user => user.id !== sessionUser.id);
  //     this.setState({ allUsers: parsedUsers });
  //   });
  // }

  makeAllUserCard = users => {
    if (!!this.props.allUsers) {
      const userCard = users.map(user => (
        <div key={user.id}>
          <UserCard {...this.props}
            user={user}
            key={user.id}
            followed={true}
            add={this.props.add}
          />
        </div>
      ));
      return userCard;
    }
  };

  render() {
    return (
      <div
        style={{ background: '#f4f4f4', padding: '225px', textAlign: 'center' }}
      >
        {this.makeAllUserCard(this.props.allUsers)}
      </div>
    );
  }
}

export default UserList;
