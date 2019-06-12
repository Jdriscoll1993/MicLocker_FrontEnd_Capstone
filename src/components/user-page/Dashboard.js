import React from 'react';
import { Modal, Image, Button } from 'semantic-ui-react';
function Dashboard() {
  return (
    <>
      <div
        style={{
          background: '#ccc',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '25px'
        }}
      >
        <Button
          style={{
            marginTop: '20px',
            float: 'right',
            background: '#355',
            color: '#fff'
          }}
        >
          Add Friend
        </Button>
        {/* <h1 style={{ textAlign: 'center' }}>Dashboard</h1> */}
        <h2
          style={{
            paddingTop: '60px',
            paddingBottom: '10px',
            paddingLeft: '26px'
          }}
        >
          Joey Driscoll
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: '#333',
            marginBottom: '50px'
          }}
        >
          <Image
            circular
            style={{ float: 'left', paddingRight: '20px' }}
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />
          <Modal.Description>
            <div
              style={{
                background: '#3887',
                padding: '20px'
              }}
            >
              <h3>Status: Focal Twin6 Be 3-way Monitors FTW</h3>

              <h4>
                Buying: Im in the market for nothing because im broke'd.
                Accepting all free buys.
              </h4>
              <h4>
                Selling: Selling everything in my studio because im broke'd
              </h4>
            </div>
          </Modal.Description>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

const dashStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '4rem'
};

// import React from 'react'
// import { Header, Image } from 'semantic-ui-react'

// const Dashboard = () => (
//   <Header as='h1'>
//     <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Dashboard
//   </Header>
// )

// export default Dashboard
