import React from 'react';
import Panel from './Panel';
import TitleImage from './TitleImage';
import FlexContainer from './FlexContainer';

class Card extends React.Component {
	render() {
        const panelStyle = {
            minWidth: "350px",
            minHeight: "350px",
            margin: 40,
            background: 'white'
        };

        const headerStyle = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        };

        const textStyle = {
            textAlign: 'center'
        };

	    return (
            <Panel title={this.props.event.task.name} footer={this.props.event.task.payrate +'$ per hour'} style={panelStyle}>
                <FlexContainer>
                    <TitleImage src={this.props.event.user.url}>
                        {this.props.event.user.name}
                    </TitleImage>

                    <TitleImage src={this.props.event.task.url}>
                        {this.props.event.task.name}
                    </TitleImage>
                </FlexContainer>

                <FlexContainer flexDirection='column'>
                    <div className="row">
                        Starts at {this.props.event.task.time}
                    </div>

                    <div className="row">
                        {this.props.event.task.description}
                    </div>

                </FlexContainer>
            </Panel>   
	    );
	}
};

module.exports = Card;