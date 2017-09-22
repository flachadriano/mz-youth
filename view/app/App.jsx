import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Team from './components/Team';
import Login from './components/Login';
import LocalStorage from './LocalStorage';
import * as session from './reducers/Session';

class App extends React.Component {
    componentDidMount() {
        let { recoverUser } = this.props;
        recoverUser(new LocalStorage().getAuthToken());
    }

    render() {
        let { authToken } = this.props;
        return authToken ? <Team /> : <Login />;
    }
}

App = connect(
    state => ({authToken: state.Session.authToken}),
    dispatch => ({ ...bindActionCreators(session, dispatch) })
)(App);

export default App;