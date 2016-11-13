import React from 'react';

const profilePicture = require('../.././public/images/profile.jpeg');

const imageStyle = {
  width: '100%',
  maxWidth: '200px',
  minWidth: '100px',
  height: 'auto',
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

const textStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
};


const titleStyle = {
  marginLeft: '10%',
};

function Description() {
  return (
    <div style={containerStyle} className="container">
      <div className="col-6" style={imageContainerStyle}>
        <img className="col-6" alt="profile" style={imageStyle} src={profilePicture} />
        <div className="col-6" style={textStyle}>
          <h1 style={titleStyle}>Alex Ionascu</h1>
        </div>
      </div>
    </div>
  );
}

module.exports = Description;
