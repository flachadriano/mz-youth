import * as service from '../services/Team';
import { combineReducers } from 'redux';

// action types
const PLAYERS_LOAD = 'PLAYERS_LOAD';

// action executors
export const loadPlayers = (authToken) => (dispatch) =>
    service.loadPlayers(authToken).then(data => dispatch(playersLoad(data)));

// action creators
const playersLoad = (players) => ({
    type: PLAYERS_LOAD,
    players
});

// reducers
const bySeason = (state = {}, action) => {
    switch(action.type) {
        case PLAYERS_LOAD:
            let newState = { ...state }
            action.players.forEach((player) => {
                newState[player.season] = newState[player.season] || [];
                newState[player.season].push(player.id);
            });
            return newState;
        default:
            return state;
    }
}

const byId = (state = {}, action) => {
    switch(action.type) {
        case PLAYERS_LOAD:
            let newState = { ...state };
            action.players.forEach((player) => 
                newState[player.id] = player);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({ bySeason, byId });