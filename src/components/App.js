import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;