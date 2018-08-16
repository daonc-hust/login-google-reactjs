import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js';
import Main from './Main.js';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        )
    }
}

function _mapStateToPropsTop(state) {
    return {

    };
}

export default connect(_mapStateToPropsTop)(App);
