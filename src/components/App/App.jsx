import './App.scss';
import React, { Component } from 'react';
import Tasks from '../Tasks/Tasks';

class App extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='App'>
                <Tasks/>
            </div>
        );
    }
}

export default App;
