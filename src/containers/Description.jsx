import React from 'react';

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

function Description() {
  return (
    <ul style={listStyle}>
      <li style={itemStyle}>DEVELOPER</li>
      <li style={itemStyle}>HACKER</li>
      <li style={itemStyle}>IT ENTHUSIAST</li>
      <li style={itemStyle}>STUDENT</li>
    </ul>
  );
}

module.exports = Description;
