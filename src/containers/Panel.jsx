import React from 'react';

class Panel extends React.Component {
	render() {
        const panelStyle = {
            width: "100%",
            height: "100%"
        };

	    return (
            <div className="panel-primary" style={this.props.style}>
                <div className="panel-heading" style={{textAlign: 'center'}}>
                    <h5>{this.props.title}</h5>
                </div>

                <div className="panel-body">
                    {this.props.children}
                </div>
                
                <div className="panel-footer">
                    {this.props.footer}
                </div>
            </div>    
	    );
	}
};

module.exports = Panel;