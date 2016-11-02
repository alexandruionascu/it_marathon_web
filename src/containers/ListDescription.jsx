import React from 'react';

const profilePicture = require('../.././public/images/profile.jpeg');

const imageStyle = {
  width: 'inherit',
  borderRadius: '50%',
};
const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'row-reverse',
};

const containerStyle = {
  width: '70%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
};

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const itemStyle = {
  background: 'black',
  display: 'table',
  color: 'white',
  fontFamily: 'Helvetica',
};

function ListDescription() {
  return (
    <div style={containerStyle} className="container">
      <div className="col-6" style={imageContainerStyle}>
        <img alt="profile" style={imageStyle} src={profilePicture} />
      </div>
      <div className="col-6">
        <ul style={listStyle}>
          <li style={itemStyle}>DEVELOPER</li>
          <li style={itemStyle}>HACKER</li>
          <li style={itemStyle}>IT ENTHUSIAST</li>
          <li style={itemStyle}>STUDENT</li>
        </ul>
      </div>
    </div>
  );
}

module.exports = ListDescription;
