import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../reducers/Session';

let Login = ({ authenticateUser }) => {
    const credentials = {};

    const onSubmit = (evt) => {
        evt.preventDefault();
        authenticateUser(credentials);
    };

    const onChangeLogin = (evt) => {
        credentials.login = evt.target.value;
    };

    const onChangePassword = (evt) => {
        credentials.password = evt.target.value;
    };

    return (<div className="container d-flex flex-column" style={{paddingTop: '60px'}}>
            <form className="align-self-center" style={{width: '300px'}}>
                <span>E-mail</span>
                <input type="email" name="login" className="form-control"/>
                <span>Senha</span>
                <input type="password" name="password"  className="form-control"/>
                <button className="mt-2 btn btn-primary" style={{width: '100%'}} >Acessar conta</button>
            </form>
        </div>)
}

Login = connect(
    undefined,
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(Login);

export default Login;