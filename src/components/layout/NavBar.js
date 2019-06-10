import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropDown from './NavDropDrown'
import { logout } from '../../authentication/userManager'
export class NavBar extends Component {
  
  render() {
    return (
      <>
        <nav className="navbar ml-right shadow">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/friends">
                Connect
              </Link>
            </li>
            <li className="nav-item"> <NavDropDown onLogout={logout}/></li>
          </ul>
         
          
          
        </nav>
      </>
    );
  }
}

export default NavBar;
