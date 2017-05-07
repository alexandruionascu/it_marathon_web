import React from 'react';

class TitleImage extends React.Component {
	render() {
        const panelStyle = {
            textAlign: 'center'
        };

        const imgStyle = {
            maxWidth: '128',
            maxHeight: '128',
            padding: '5px'
        };

	    return (
            <div className="title-Image" style={panelStyle}>
                <img src={this.props.src} style={imgStyle}/>
                <h3>{this.props.children}</h3>
            </div>    
	    );
	}
};

module.exports = TitleImage;