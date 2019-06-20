import React, { Component } from 'react';
import UserCard from './UserCard';
export class UserList extends Component {
  makeAllUserCard = users => {
    console.log(users);
    const userCard = users.map(user => (
      <div key={user.id}>
        <UserCard
          {...this.props}
          user={user}
          key={user.id}
          followed={true}
          add={this.props.add}
        />
      </div>
    ));
    return userCard;
  };

  render() {
    console.log(this.props.allUsers);
    return (
      <div>
        <input
          type="text"
          id="search"
          onChange={event => this.props.handleFieldChange(event)}
        />
        <button onClick={this.props.onSearchSubmit}>Filter Users</button>
        {this.makeAllUserCard(this.props.allUsers)}
      </div>
    );
  }
}

export default UserList;
