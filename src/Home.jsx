import React from 'react';
import ReactDOM from 'react-dom';
import Page from './containers/Page';

// const whitewall = require('.././public/images/white_wall.jpg');

function OnePage() {
  return (
    <div>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
    </div>
  );
}

ReactDOM.render(<OnePage />, document.getElementById('content'));
