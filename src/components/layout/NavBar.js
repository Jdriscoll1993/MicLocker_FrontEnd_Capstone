import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import NavDropDown from './NavDropDrown';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  state = { activeItem: 'home' };

  render() {
    return (
      <div className="navbar-style">
      <Menu secondary style={{ background: '#f3f3f3' }}>
        <Menu.Item>
          <Link className="nav-link" to="/home">
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="nav-item">
            <NavDropDown user={this.props.user} onLogout={this.props.onLogout} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    );
  }
}