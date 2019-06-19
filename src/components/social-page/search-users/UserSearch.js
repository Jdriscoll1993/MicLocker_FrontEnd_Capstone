import React, { Component } from 'react';
// import { withRouter } from 'react-router';
// import { link } from 'react-router-dom';

export class UserSearch extends Component {


  render() {
    return (
      <div
        style={{ background: '#375', padding: '100px', textAlign: 'center' }}
      >
        <input onKeyUp={e => this.handleSearch(e)} />
        <button>Search Users</button>
      </div>
    );
  }
}

export default UserSearch;
