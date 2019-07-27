import React, { Component } from 'react';
import { Button, Dropdown, Modal, Image, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class NavDropDown extends Component {
  state = {
    initialLoad: false,
    editableInfo: this.props.user
      ? this.props.user
      : { buying: '', selling: '', status: '' }
  };
 
// Implementing commented code in Version 2.
  // onStatusChange(newStatus) {
  //   let editableInfo = this.state.editableInfo;
  //   editableInfo.status = newStatus;
  //   this.setState({
  //     editableInfo: editableInfo
  //   });
  // }

  // onBuyingChange(newBuy) {
  //   let editableInfo = this.state.editableInfo;
  //   editableInfo.buying = newBuy;
  //   this.setState({ editableInfo: editableInfo });
  // }

  // onSellingChange(newSell) {
  //   let editableInfo = this.state.editableInfo;
  //   editableInfo.selling = newSell;
  //   this.setState({ editableInfo: editableInfo });
  // }

  render() {
    // console.log('navdrop', this.props.user)
    return (
      // {this.props.user.username}
      <Dropdown 
      
      text={'Greetings ' + this.props.user.username}>
        <Dropdown.Menu style={{marginTop:'20px'}}>
          {/* <Dropdown.Item>
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
                      Status
                      <Form
                        className="settings--form"
                        onSubmit={this.submitSettings}
                      >
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
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </div>
            </div>
          </Dropdown.Item> */}
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
