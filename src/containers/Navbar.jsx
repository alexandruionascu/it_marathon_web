import React from 'react';

function Navbar(props) {
  const navbarStyle = {
    background: 'red',
    width: '100%',
    position: 'fixed',
  };
  return <div style={navbarStyle}>{props.children}</div>;
}

Navbar.propTypes = {
  children: React.PropTypes.element,
};

module.exports = Navbar;
