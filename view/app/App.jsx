import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Team from './components/Team';
import Login from './components/Login';
import LocalStorage from './LocalStorage';
import * as sessionActions from './reducers/Session';
import * as teamActions from './reducers/Team';

class App extends React.Component {
    componentDidMount() {
        let { recoverUser, seasonUpdate } = this.props;
        recoverUser(new LocalStorage().getAuthToken());
        seasonUpdate(63);
    }

    render() {
        let { authToken } = this.props;
        return authToken ? <Team /> : <Login />;
    }
}

App = connect(
    state => ({authToken: state.Session.authToken}),
    dispatch => ({
        ...bindActionCreators(sessionActions, dispatch),
        ...bindActionCreators(teamActions, dispatch)
    })
)(App);

export default App;