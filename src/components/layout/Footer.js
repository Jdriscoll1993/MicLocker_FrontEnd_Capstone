import React from 'react';
import './Footer.css'
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
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'helvetica',
    paddingBottom:'30px'
  }

export default Footer;