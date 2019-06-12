import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Mic Locker</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '30px',
  fontFamily: 'helvetica',
  marginBottom: '30px'
}

export default Header;