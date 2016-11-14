import React from 'react';

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

function Description(props) {
  return (
    <div style={containerStyle} className="container">
      <div className="col-6" style={imageContainerStyle}>
        <img className="col-6" alt="profile" style={imageStyle} src={props.imageSource} />
        <div className="col-6" style={textStyle}>
          <h1 style={titleStyle}>{props.children}</h1>
        </div>
      </div>
    </div>
  );
}

Description.propTypes = {
  children: React.PropTypes.string,
  imageSource: React.PropTypes.string.isRequired,
};

module.exports = Description;
