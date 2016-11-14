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
  display: 'flex',
  alignItems: 'center',
};
const itemStyle = {
  display: 'inline',
  padding: '5px',
  textAlign: 'center',
  cursor: 'default',
};

function Navbar() {
  return (
    <ul className="col-12" style={listStyle}>
      <li className="col-4" style={itemStyle}>Home</li>
      <li className="col-4 dropdown">
        <div className="dropbtn">Blog</div>
        <div className="dropdown-content">
          <a href="/algorithms">Projects</a>
          <a href="/personal">Algorithms</a>
          <a href="/blank">Personal</a>
        </div>
      </li>
      <li className="col-4" style={itemStyle}>Experience</li>
      <li className="col-4" style={itemStyle}>Contact</li>
    </ul>
  );
}

module.exports = Navbar;
