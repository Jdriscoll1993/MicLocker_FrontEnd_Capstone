import React, { Component } from 'react'
import * as FriendsManager from '../../../modules/FriendsManager'
export class UserList extends Component {


  render() {
    return (
      <div style={{background:"#f4f4f4", padding: '200px', textAlign:'center'}}>
        User List
        {/* <section>
          {this.props.followers.map(follower => {
            if (this.state.user.id === follower.userId) {
              return (
                <UserCard
                  {...this.props}
                  key={follower.id}
                  follower={follower}
                  
                />
              );
            }
          })}
        </section> */}
      </div>
      
    )
  }
}

export default UserList
