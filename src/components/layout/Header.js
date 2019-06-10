import React from 'react';

function Head() {
  return (
    <header style={headerStyle}>
      <h1>Mic Locker</h1>
    </header>
  )
}

const headerStyle = {
  background: 'rgb(140, 100, 70)',
  color: '#fff',
  textAlign: 'center',
  padding: '30px',
  fontFamily: 'helvetica',
  marginBottom: '30px'
}

export default Head;