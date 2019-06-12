import React from 'react';
import { Modal, Image, Header } from 'semantic-ui-react';
function Dashboard() {
  return (
    <>
      <div
        style={{
          background: '#ccc',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Dashboard</h1>

        <Image
          circular
          style={{ display: 'flex', marginBottom: '15px' }}
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'row',
            color: '#333',
            marginBottom: '50px'
          }}
        >
          <Modal.Description>
            <h2>Joey Driscoll</h2>
            <h5>Status: Focal Twin6 Be 3-way Monitors FTW</h5>

            <h6>
              Im in the market for nothing because im broke'd. Accepting all
              free buys.
            </h6>
            <h6>Selling everything in my studio because im broke'd</h6>
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
