import React from 'react';
import ReactDOM from 'react-dom';

import Team from './Team';

import * as service from '../services/Login';
import * as actions from '../reducers/Login'

let Login = ({ store }) => {
    const loginData = {};

    const onSubmit = (evt) => {
        evt.preventDefault();
        service.login(loginData).then(data => {
            if (data.auth_token) {
                store.dispatch(actions.userToken(data.auth_token))
                ReactDOM.render(<Team store={store} />, document.getElementById('root'));
            } else {
                store.dispatch(actions.userToken())
                // TODO threat message error response
            }
        });
    }

    const onChangeLogin = (evt) => {
        loginData.login = evt.target.value;
    }

    const onChangePassword = (evt) => {
        loginData.password = evt.target.value;
    }

    return (
        <form onSubmit={onSubmit}>
            <span>Login</span>
            <input type="text" name="login" onChange={onChangeLogin}/><br/>
            <span>Senha</span>
            <input type="text" name="password" onChange={onChangePassword}/><br/>
            <input type="submit" value="Logar"/>
        </form>
    )
}

export default Login;