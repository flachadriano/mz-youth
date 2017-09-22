import React from 'react';
import { connect } from 'react-redux';
import Team from './components/Team';
import Login from './components/Login';

class App extends React.Component {
    render() {
        let { authToken } = this.props;
        return authToken ? <Team /> : <Login />;
    }
}

App = connect(
    state => ({authToken: state.Login.authToken})
)(App);

export default App;