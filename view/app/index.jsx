import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Login from './components/Login';
import Team from './components/Team';
import Reducer from './reducers/Login';

let store = createStore(Reducer, {});

if (store.getState().auth_token) {
    ReactDOM.render(<Team store={store} />, document.getElementById('root'));
} else {
    ReactDOM.render(<Login store={store} />, document.getElementById('root'));
}