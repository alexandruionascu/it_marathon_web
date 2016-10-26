import React from 'react';
import whiteWall from '../../public/images/white_wall.jpg';

class Page extends React.Component {

  static get defaultProps() {
    return { background: whiteWall };
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.background})`,
    };

    console.log(this.props.background);

    return <div className="page" style={styles}><h1>Blat</h1></div>;
  }

}

Page.propTypes = {
  background: React.PropTypes.string,
};

module.exports = Page;
