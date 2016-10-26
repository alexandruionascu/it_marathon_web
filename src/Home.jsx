import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';

const whiteWall = require('.././public/images/white_wall.jpg');
const darkWall = require('.././public/images/dark_wall.jpg');
const brownWall = require('.././public/images/brown_wall.jpg');

function OnePage() {
  const styles = {
    height: '500%',
    width: '100%',
    overflow: 'auto',
  };
  const pageHeight = '20%';

  return (
    <div className="page-container" style={styles}>
      <Page height={pageHeight} background={whiteWall} />
      <Page height={pageHeight} background={darkWall} />
      <Page height={pageHeight} background={brownWall} />
      <Page height={pageHeight} />
      <Page height={pageHeight} />
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('app'));
