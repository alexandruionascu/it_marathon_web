import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';
import Navbar from './containers/Navbar';
import Description from './containers/Description';
import ImageDescription from './containers/ImageDescription';
import SkillsList from './containers/SkillsList';
import Header from './containers/Header';

const darkWall = require('.././public/images/dark_wall.jpg');
const mountain = require('.././public/images/mountain.jpg');
const sunsetMountain = require('.././public/images/sunset_mountain.jpg');
const cloudyMountain = require('.././public/images/cloudy_mountain.jpg');
const city = require('.././public/images/city.jpg');

function OnePage() {
  const pageContainerStyle = {
    height: '500%',
    width: '100%',
    overflow: 'auto',
  };

  const pageContentStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const pageHeight = '20%';

  return (
    <div>
      <Navbar />
      <div className="page-container" style={pageContainerStyle}>
        <Page height={pageHeight} background={mountain}>
          <Description />
        </Page>
        <Page height={pageHeight} color="white" background={sunsetMountain}>
          <div style={pageContentStyle}>
            <SkillsList title="Experienced">
              <i className="devicon-cplusplus-plain-wordmark col-3" />
              <i className="devicon-csharp-plain-wordmark col-3" />
              <i className="devicon-dot-net-plain-wordmark col-3" />
              <i className="devicon-nodejs-plain col-3" />
            </SkillsList>

            <SkillsList title="Good">
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
          </div>
        </Page>
        <Page height={pageHeight} background={cloudyMountain}>
          <Header title="Education" />
          <ImageDescription src={city}>
            Faculty of Mathematics and Computer Science at University of Bucharest
          </ImageDescription>
          <ImageDescription src={city}>
            Specialization:
            <br />
            Computer Science
            <br />
            Expected Graduation: 2018
          </ImageDescription>
          <ImageDescription src={city}>
            Previous:
            <br />
            National Collage Gheorghe Rosca Codrenu
          </ImageDescription>
        </Page>
        <Page height={pageHeight} background={city} >
          <Header title="Experience" />
          <div style={pageContentStyle}>
            <ImageDescription>
              C++ Developer at EA
            </ImageDescription>
            <ImageDescription>
              C++ Developer at Societe Generale
            </ImageDescription>
          </div>
        </Page>
        <Page height={pageHeight} background={darkWall} />
      </div>
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('app'));
