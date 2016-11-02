import React from 'react';

const listStyle = {
  position: 'fixed',
  margin: '0 auto',
  /*  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', */
  listStyle: 'none',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '5px',
  fontFamily: 'Raleway, sans serif',
  fontWeight: 200,
  left: 0,
  right: 0,
};
const itemStyle = {
  display: 'inline',
  padding: '5px',
  textAlign: 'center',
  cursor: 'default',
};

function Navbar() {
  return (
    <ul className="col-10" style={listStyle}>
      <li className="col-3" style={itemStyle}>Home</li>
      <li className="col-3" style={itemStyle}>Blog</li>
      <li className="col-3" style={itemStyle}>Contact</li>
      <li className="col-3" style={itemStyle}>About</li>
    </ul>
  );
}

module.exports = Navbar;
