import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Modal,
  Image,
  Header,
  Form
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../authentication/userManager';

// import SettingsManager from '../../modules/SettingsManager';

// Wrap inputs in Form and attach button similiar to login page. +

// The Form will have an onSubmit function that autmically gets called when the button is clicked (login page) +

// submit () { logic to PUT (json server) update to current user will be in this function }

// make a user object with all needed users fields ** Reference the object being used in the Register component (the state object here represents the user)

// Should just be able to grab editable info and use as user object for Put

//then, to navigate user back to main page, use the routes/history thing at the end of the on submit function

class NavDropDown extends Component {
  state = {
    initialLoad: false,
    editableInfo: this.props.user
  };

  // submitSettings = () => {
  //   SettingsManager.putSettings(this.props.status, this.props.buying, this.props.selling).then(user => {
  //     this.props.onSubmit(user);
  //     this.props.history.push('/home');
  //   });
  // };

  onStatusChange(newStatus) {
    let editableInfo = this.state.editableInfo;
    editableInfo.status = newStatus;
    this.setState({ editableInfo: editableInfo });
  }

  onBuyingChange(newBuy) {
    let editableInfo = this.state.editableInfo;
    editableInfo.buying = newBuy;
    this.setState({ editableInfo: editableInfo });
  }

  onSellingChange(newSell) {
    let editableInfo = this.state.editableInfo;
    editableInfo.selling = newSell;
    this.setState({ editableInfo: editableInfo });
  }

  render() {
    return (
      // {this.props.user.username}
      <Dropdown text="username">
        <Dropdown.Menu>
          <Dropdown.Item>
            <div className="nav nav-pills">
              <div className="nav-item">
                <Modal trigger={<Button>Account Settings</Button>}>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="medium"
                      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                    />
                    <Modal.Description>
                      {/* <p>{this.state.editableInfo.buying}</p>
                      <p>{this.state.editableInfo.selling}</p>  */}
                      Status
                      {/* <Form className="settings--form" onSubmit={this.submitSettings}>
                        <Form.Field
                          control="input"
                          value={this.state.editableInfo.status}
                          onChange={e => this.onStatusChange(e.target.value)}
                        />
                        Buying
                        <Form.Field
                          control="input"
                          value={this.state.editableInfo.buying}
                          onChange={e => this.onBuyingChange(e.target.value)}
                        />
                        Selling
                        <Form.Field
                          control="input"
                          value={this.state.editableInfo.selling}
                          onChange={e => this.onSellingChange(e.target.value)}
                        />
                        <Button fluid content="Save Settings" color="green" />
                      </Form> */}
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              onClick={this.props.onLogout}
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
