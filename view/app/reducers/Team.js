import * as service from '../services/Team';
import { combineReducers } from 'redux';

// action types
const PLAYERS_LOAD = 'PLAYERS_LOAD';

// action executions
export const loadPlayers = (authToken) => (dispatch) =>
    service.loadPlayers(authToken).then(data => dispatch(data));

// action creators
const playersLoad = (players) => ({
    type: PLAYERS_LOAD,
    players
});

// reducer
const bySeason = (state = {}, action) => {
    switch(action.type) {
        case PLAYERS_LOAD:
            let newState = { ...state };
            action.players.forEach((player) => {
                newState[player.season] = newState[player.season] || [];
                newState[player.season].push(player.id);
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

const byId = (state = {}, action) => {
    switch(action.type) {
        case PLAYERS_LOAD:
            let newState = { ...state };
            action.players.forEach((player) => {
                newState[player.id] = newState[player.id] || [];
                newState[player.id].push(player);
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({ bySeason, byId });