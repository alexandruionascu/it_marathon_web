import React from 'react';

class FlexContainer extends React.Component {
	constructor(props) {
        super(props);
    }
    
    render() {
        const containerStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: this.props.flexDirection,
            justifyContent: 'center'
        };

	    return (
            <div style={containerStyle}>
                {this.props.children}
            </div>    
	    );
	}
};

module.exports = FlexContainer;