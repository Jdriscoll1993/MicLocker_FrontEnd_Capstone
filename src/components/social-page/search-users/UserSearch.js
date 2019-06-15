import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { link } from 'react-router-dom';

export class UserSearch extends Component {
  // handleSearch(input) {
  //   //only search on enter/return keypress
  //   if (input.keyCode === 13) {
  //   this.props.getSearchResults(input.target.value);
  //   this.props.history.push('/search');
  //    }
  //   }

  render() {
    return (
      <div style={{ background: '#375', padding: '100px' }}>
        User Search
        <input onKeyUp={e => this.handleSearch(e)} />
        <button>Search Users</button>
      </div>
    );
  }
}

export default UserSearch;
