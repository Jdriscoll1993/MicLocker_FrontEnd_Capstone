import React, { Component } from 'react';
import UserCard from './UserCard';
import { Input, Button } from 'semantic-ui-react';

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
        <Input style={{margin:'50px'}}
          size="large"
          icon="users"
          iconPosition="left"
          placeholder="Search users..."
          type="text"
          id="search"
          onChange={event => this.props.handleFieldChange(event)}
        />
        
        <Button color="green" onClick={this.props.onSearchSubmit}>Search</Button>
        {this.makeAllUserCard(this.props.allUsers)}
      </div>
    );
  }
}

export default UserList;
