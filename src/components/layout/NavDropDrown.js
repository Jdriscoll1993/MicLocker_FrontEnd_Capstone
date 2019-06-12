import React, { Component } from 'react';
import { Button, Dropdown, Modal, Image, Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
class NavDropDown extends Component {
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
                <Modal trigger={<Button>Account Settings</Button>}>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="medium"
                      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                    />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>
                        We've found the following gravatar image associated with
                        your e-mail address.
                      </p>
                      <p>Is it okay to use this photo?</p>
                      <p>Status</p>
                      <p>Buying</p>
                      <p>Selling</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </li>
            </ul>
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              onClick={() => this.props.onLogout()}
              content="Log Out"
              color="green"
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}



export default withRouter(NavDropDown);
