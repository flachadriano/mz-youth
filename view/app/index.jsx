import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducer from './reducers/Login';
import App from './App';

/*
promise = allows to dispatch actions inside a then call of a promise
thunk = make possible to an action receives as parameter the dispatch function (Login)
*/

let store = createStore(Reducer,
    {},
    applyMiddleware(promise, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
