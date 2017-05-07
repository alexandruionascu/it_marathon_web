import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './containers/Panel';
import Card from './containers/Card';
import FlexContainer from './containers/FlexContainer';
import Navbar from './containers/Navbar';

 

$.get('/events', function(data) {
    let events = [];
    for(var i in data) {
        events.push(<Card event={data[i]} />);
    }

    ReactDOM.render(
            (<div>
                <Navbar />
                <FlexContainer>
                    {events}
                </FlexContainer>
            </div>), document.getElementById('app')
    );
});

