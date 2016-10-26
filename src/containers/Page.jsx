import React from 'react';
import whiteWall from '../../public/images/white_wall.jpg';

class Page extends React.Component {

  static get defaultProps() {
    return {
      background: whiteWall,
      height: '20%',
      overflow: 'auto',
    };
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.background})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: this.props.height,
      width: '100%',
      overflow: 'auto',
    };

    console.log(this.props.background);

    return <div className="page" style={styles}> {this.props.children} </div>;
  }

}

Page.propTypes = {
  background: React.PropTypes.string,
  height: React.PropTypes.string,
  children: React.PropTypes.element,
};

module.exports = Page;
