import React, { Component } from 'react';

import Countdown from './Countdown';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: "breakfast", time: "7:00" },
                { id: 1, name: "lunch", time: "13:00" }
                
            ]
        }
    }

    render() {
        return (
            <div>
                <Countdown name="breakfast" time="7:00" />
                <Countdown name="lunch" time="13:00" />
            </div>
       )
    }
};

export default App;




