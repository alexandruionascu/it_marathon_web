import React from 'react';

const imageStyle = {
  width: '100px',
  height: '100px',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Raleway, sans serif',
  fontWeight: 200,
  margin: '0 auto',
};

const fontStyle = {
  font: 'Raleway, sans serif',
  fontWeight: 200,
};

function ImageDescription(props) {
  return (
    <div className="col-4" style={containerStyle}>
      <img className="col-6" alt="profile" style={imageStyle} src={props.src} />
      <div className="col-6">
        <h6 style={fontStyle}>{props.children}</h6>
      </div>
    </div>
  );
}

ImageDescription.propTypes = {
  children: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
};

module.exports = ImageDescription;
