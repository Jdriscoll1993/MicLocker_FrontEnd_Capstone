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
            size="large"
            style={{
              marginTop:'35px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '15px',
              background: '#333'
            }}
            src={this.props.user.image}
          />
          <Modal.Content image>
            {this.props.status} {this.props.buying} {this.props.selling}
            <h1 style={{
              marginLeft:'30px', 
              width:'100px',textAlign: 'center', padding: '20px', color:"#fff",
          background: '#333', border:"2px solid rgb(28, 33, 29)"  }}>
              {this.props.user.username}
            </h1>
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
