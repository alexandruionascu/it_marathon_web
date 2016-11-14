import React from 'react';

const headerStyle = {
  fontFamily: 'Raleway, sans serif',
  fontWeight: 200,
  textAlign: 'center',
  alignSelf: 'flex-start',
};

function Header(props) {
  return <h1 style={headerStyle}>{props.title}</h1>;
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
module.exports = Header;
