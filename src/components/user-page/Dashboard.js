import React from 'react';
import { Modal, Image, Button, Grid } from 'semantic-ui-react';
function Dashboard(props) {
  return (
    <>
      <div style={{ padding: 50, margin: 100, background: '#ccc' }}>
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

          <div style={{ float: 'right', margin: '50px' }}>
            <p>Status</p>
            <p>Buying</p>
            <p>Selling</p>
          </div>
          <Image circular size="large" src={props.user.image} />
          <Modal.Description />
        </Modal.Content>
      </div>
    </>
  );
}
export default Dashboard;
