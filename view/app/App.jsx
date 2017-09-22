import React from 'react';
import { connect } from 'react-redux';
import Team from './components/Team';
import Login from './components/Login';
import LocalStorage from './LocalStorage';
import Session from './reducers/Session';

class App extends React.Component {
    componentDidMount() {
        new LocalStorage().getAuthToken();
    }

    render() {
        let { authToken } = this.props;
        return authToken ? <Team /> : <Login />;
    }
}

App = connect(
    state => ({authToken: state.Session.authToken})
)(App);

export default App;