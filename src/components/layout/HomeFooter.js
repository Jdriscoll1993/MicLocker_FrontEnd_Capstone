import React from 'react';

function Footer() {
    return (
      <div>
        <footer style={footerStyle} className="footer">
          <p>&copy;Joey Driscoll</p>
        </footer>
      </div>
    );
  }

  const footerStyle = {
    background: 'rgb(140, 100, 70)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'helvetica',
    marginBottom: '15px'
  }

export default Footer;