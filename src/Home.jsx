import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';
import Navbar from './containers/Navbar';
import Description from './containers/Description';

const whiteWall = require('.././public/images/white_wall.jpg');
const darkWall = require('.././public/images/dark_wall.jpg');
const brownWall = require('.././public/images/brown_wall.jpg');
const orangeWall = require('.././public/images/orange_wall.jpg');
const grayWall = require('.././public/images/gray_wall.jpg');


function OnePage() {
  const styles = {
    height: '500%',
    width: '100%',
    overflow: 'auto',
  };


  const pageHeight = '20%';

  return (
    <div>
      <Navbar />
      <div className="page-container" style={styles}>
        <Page height={pageHeight} background={whiteWall}>
          <Description />
        </Page>
        <Page height={pageHeight} background={grayWall} />
        <Page height={pageHeight} background={orangeWall} />
        <Page height={pageHeight} background={brownWall} />
        <Page height={pageHeight} background={darkWall} />
      </div>
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('app'));
