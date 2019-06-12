import React from 'react';

function Dashboard() {
  return (
    <div>
      <header style={dashStyle}>
        <h1>Dashboard</h1>
      </header>
    </div>
  );
}
export default Dashboard;

const dashStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: "4rem"
};

// import React from 'react'
// import { Header, Image } from 'semantic-ui-react'

// const Dashboard = () => (
//   <Header as='h1'>
//     <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Dashboard
//   </Header>
// )

// export default Dashboard
