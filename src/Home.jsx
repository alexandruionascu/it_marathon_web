import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';
import Navbar from './containers/Navbar';
import ListDescription from './containers/ListDescription';
import Description from './containers/Description';
import SkillsList from './containers/SkillsList';
import Header from './containers/Header';

const darkWall = require('.././public/images/dark_wall.jpg');
const mountain = require('.././public/images/mountain.jpg');
const sunsetMountain = require('.././public/images/sunset_mountain.jpg');
const cloudyMountain = require('.././public/images/cloudy_mountain.jpg');
const city = require('.././public/images/city.jpg');

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
        <Page height={pageHeight} background={mountain}>
          <Description />
        </Page>
        <Page height={pageHeight} color="white" background={sunsetMountain}>
          <Header title="Skills" />
          <SkillsList title="Experienced">
            <i className="devicon-cplusplus-plain-wordmark col-3" />
            <i className="devicon-csharp-plain-wordmark col-3" />
            <i className="devicon-dot-net-plain-wordmark col-3" />
            <i className="devicon-nodejs-plain col-3" />
          </SkillsList>

          <SkillsList title="Good Knowledge">
            <i className="devicon-html5-plain-wordmark col-3" />
            <i className="devicon-css3-plain-wordmark col-3" />
            <i className="devicon-java-plain-wordmark col-3" />
            <i className="devicon-linux-plain col-3" />
          </SkillsList>

          <SkillsList title="Familiar">
            <i className="devicon-python-plain-wordmark col-3" />
            <i className="devicon-coffeescript-plain-wordmark col-3" />
            <i className="devicon-react-plain-wordmark col-3" />
            <i className="devicon-git-plain-wordmark col-3" />
          </SkillsList>

        </Page>
        <Page height={pageHeight} background={cloudyMountain}>
          <ListDescription />
        </Page>
        <Page height={pageHeight} background={city} />
        <Page height={pageHeight} background={darkWall} />
      </div>
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('app'));
