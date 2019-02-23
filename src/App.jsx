import React, { Component } from 'react';

import "./App.css";
import Countdown from './Countdown';
import EditEvent from './EditEvent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: "breakfast", time: "7:00" },
                { id: 1, name: "lunch", time: "13:00" },
                { id: 2, name: "dinner", time: "18:00" }
            ]
        }
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} time={el.time} />;
        });
        return (
            <div className="app">
                {events}
                <EditEvent />
            </div>
            );
    }
}

export default App;







