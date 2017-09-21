import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../reducers/Login';

let Login = ({ authenticate_user }) => {
    const credentials = {};

    const onSubmit = (evt) => {
        evt.preventDefault();
        authenticate_user(credentials);
    }

    const onChangeLogin = (evt) => {
        credentials.login = evt.target.value;
    }

    const onChangePassword = (evt) => {
        credentials.password = evt.target.value;
    }

    return (
        <form onSubmit={onSubmit}>
            <span>Login</span>
            <input type="email" name="login" onChange={onChangeLogin}/><br/>
            <span>Senha</span>
            <input type="password" name="password" onChange={onChangePassword}/><br/>
            <input type="submit" value="Logar"/>
        </form>
    )
}

Login = connect(
    undefined,
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(Login);

export default Login;