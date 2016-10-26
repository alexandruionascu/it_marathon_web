import React from 'react';

function Navbar(props) {
  const navbarStyle = {
    background: 'white',
    width: '100%',
    position: 'fixed',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  };
  return <div style={navbarStyle}>{props.children}</div>;
}

Navbar.propTypes = {
  children: React.PropTypes.element,
};

module.exports = Navbar;
