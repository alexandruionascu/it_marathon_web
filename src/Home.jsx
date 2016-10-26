import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';

const whiteWall = require('.././public/images/white_wall.jpg');
const darkWall = require('.././public/images/dark_wall.jpg');
const brownWall = require('.././public/images/brown_wall.jpg');
const orangeWall = require('.././public/images/orange_wall.jpg');
const grayWall = require('.././public/images/gray_wall.jpg');
const profilePicture = require('.././public/images/profile.jpeg');

function OnePage() {
  const styles = {
    height: '500%',
    width: '100%',
    overflow: 'auto',
  };

  const imageStyle = {
    width: 'inherit',
    borderRadius: '50%',
  };

  const containerStyle = {
    backgroundColor: 'blue',
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  const pageHeight = '20%';

  return (
    <div className="page-container" style={styles}>
      <Page height={pageHeight} background={whiteWall}>
        <div style={containerStyle} className="container">
          <div className="col-6" style={{ backgroundColor: 'red' }}>
            <img alt="profile" style={imageStyle} src={profilePicture} />
          </div>
          <div className="col-6" style={{ backgroundColor: 'orange' }}>
            <img alt="profile" src={profilePicture} style={imageStyle} />
          </div>
        </div>
      </Page>
      <Page height={pageHeight} background={grayWall} />
      <Page height={pageHeight} background={orangeWall} />
      <Page height={pageHeight} background={brownWall} />
      <Page height={pageHeight} background={darkWall} />
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('app'));
