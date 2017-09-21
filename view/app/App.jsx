import React from 'react';
import { connect } from 'react-redux';
import Team from './components/Team';
import Login from './components/Login';

let App = ({ authToken }) => {
    if (authToken) {
        return <Team />;
    } else {
        return <Login />;
    }
}

App = connect(
    state => ({authToken: state.authToken})
)(App);

export default App;