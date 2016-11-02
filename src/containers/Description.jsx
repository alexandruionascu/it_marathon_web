import React from 'react';

const profilePicture = require('../.././public/images/profile.jpeg');

const imageStyle = {
  width: '200px',
  height: '200px',
};

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
  border: '1px solid black',
};

const containerStyle = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Raleway, sans serif',
  fontWeight: 200,
};

function Description() {
  return (
    <div style={containerStyle} className="container">
      <div className="col-6" style={imageContainerStyle}>
        <img className="col-6" alt="profile" style={imageStyle} src={profilePicture} />
        <div className="col-6">
          <h1>Alex</h1>
          <h1>Ionascu</h1>
        </div>
      </div>
    </div>
  );
}

module.exports = Description;
