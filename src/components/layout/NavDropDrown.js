import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

export default class NavDropDown extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <Dropdown text="Username">
        <Dropdown.Menu>
          <Dropdown.Item>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Profile
                </Link>
              </li>
            </ul>
          </Dropdown.Item>
          <Dropdown.Item>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Account Settings
                </Link>
              </li>
            </ul>
          </Dropdown.Item>

          <Dropdown.Item>
            <Button
              onClick={() => this.logout()}
              content="Log Out"
              color="green"
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
