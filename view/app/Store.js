import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Session from './reducers/Session';
import Team from './reducers/Team';

/*
promise = allows to dispatch actions inside a then call of a promise
thunk = make possible to an action receives as parameter the dispatch function (Session)
*/

const reducers = combineReducers({ Session, Team });

const store = createStore(reducers, applyMiddleware(promise, thunk));

store.getState(); // initialize the states

export default store;
