import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Image, Header } from 'semantic-ui-react';
import SettingsManager from '../../modules/SettingsManager';
class Dashboard extends Component {
  componentDidMount() {
    SettingsManager.getOneUser(this.props.user).then(settings => {
      console.log(this.props.user);
    });
  }

  render() {
    return (
      <>
        <div className="dashboard--container">
          <Image
            circular
            size="big"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            src={this.props.user.image}
          />
          <Modal.Content image>
            {this.props.status} {this.props.buying} {this.props.selling}
            {/* <Button
              style={{
                float: 'right',
                background: '#355',
                color: '#f3f3f3'
              }}
            >
              Add Friend
            </Button> */}
            <Modal.Description />
          </Modal.Content>
          <Header />
        </div>
      </>
    );
  }
}
export default withRouter(Dashboard);
