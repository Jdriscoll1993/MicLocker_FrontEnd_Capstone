import React from 'react';
import { Modal, Image, Button, Header } from 'semantic-ui-react';
function Dashboard(props) {
  return (
    <>
      <div
        style={{
          padding: 'auto',
          margin: 'auto',
          marginBottom: '45px',
          marginTop: '45px',
          background: '#ccc'
        }}
      >
        <Modal.Content image>
          <Button
            style={{
              float: 'right',
              background: '#355',
              color: '#f3f3f3'
            }}
          >
            Add Friend
          </Button>
          <Image
            // circular
            size="large"
            style={{ padding: '50px' }}
            src={props.user.image}
          />
          <Modal.Description />
        </Modal.Content>
        <Header>hello {props.user.username}</Header>
      </div>
    </>
  );
}
export default Dashboard;
