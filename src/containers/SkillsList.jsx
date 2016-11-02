import React from 'react';
import Header from './Header';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
};

function SkillsList(props) {
  return (
    <div className="col-4">
      <Header title={props.title} />
      <div style={containerStyle}>
        {props.children}
      </div>
    </div>
  );
}

SkillsList.propTypes = {
  children: React.PropTypes.element,
  title: React.PropTypes.string.isRequired,
};
module.exports = SkillsList;
