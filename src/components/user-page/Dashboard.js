import React from 'react';
import { Modal, Image, Button, Header } from 'semantic-ui-react';
function Dashboard(props) {
  return (
    <>
      <div style={{ padding: 'auto', margin: 'auto', background: '#ccc' }}>
        <Modal.Content image>
          <Header>hello {props.user.username}</Header>
          <Button
            style={{
              float: 'right',
              background: '#355',
              color: '#f3f3f3'
            }}
          >
            Add Friend
          </Button>
          <Image circular size="large" src={props.user.image} />
          <Modal.Description />
        </Modal.Content>
      </div>
    </>
  );
}
export default Dashboard;
