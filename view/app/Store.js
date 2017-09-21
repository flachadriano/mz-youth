import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Login from './reducers/Login';
import Team from './reducers/Team';

/*
promise = allows to dispatch actions inside a then call of a promise
thunk = make possible to an action receives as parameter the dispatch function (Login)
*/

const reducers = combineReducers({Login, Team});

export default createStore(reducers, applyMiddleware(promise, thunk));
