import * as service from '../services/Team';
import { combineReducers } from 'redux';

// action types
const PLAYERS_LOAD = 'PLAYERS_LOAD';
const SEASON_CURRENT = 'SEASON_CURRENT';

// action executors
export const loadPlayers = (authToken) => (dispatch) =>
    service.loadPlayers(authToken).then(data => dispatch(playersLoad(data)));

export const seasonUpdate = (season) => (dispatch) =>
    dispatch(updaSeason(season));

// action creators
const playersLoad = (players) => ({
    type: PLAYERS_LOAD,
    players
});

const updaSeason = (season) => ({
    type: SEASON_CURRENT,
    season
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

const data = (state = {}, action) => {
    switch(action.type) {
        case SEASON_CURRENT:
            return { ...state, current_season: action.season };
        default:
            return state;
    }
}

export default combineReducers({ bySeason, byId, data });