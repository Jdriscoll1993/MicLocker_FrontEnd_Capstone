import React, { Component } from 'react';
import { Link } from 
'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class NavBar extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.history.push('/login');
  };
  render() {
    return (
      <>
      <nav className="navbar ml-right shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Welcome
            </Link>
            
          </li>
        </ul>
        <Button
                onClick={() => this.logout()}
                content="Log Out"
                color="purple"
              />
      </nav>
      </>
    );
  }
}

export default NavBar;
