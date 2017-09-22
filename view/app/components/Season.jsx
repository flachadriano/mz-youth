import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

let Season = ({ season, shirtNumber, playerIds, players, current_season }) => {
    // the age of a player in the current season
    const playerAge = current_season - season;

    return (<div className="season container">
        <span>Season {season}</span>
        <div className="row season-title">
            <span className="col-1">N</span>
            <span className="col-3">Name</span>
            <span className="col-2">Position</span>
            <span className="col-1">Sell</span>
            <div className="col-5 season-info-container">
                <div className="season-info"><span>{playerAge >= 16 ? 'S'+current_season : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 17 ? 'S'+(current_season - 1) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 18 ? 'S'+(current_season - 2) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 19 ? 'S'+(current_season - 3) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 20 ? 'S'+(current_season - 4) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 21 ? 'S'+(current_season - 5) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 22 ? 'S'+(current_season - 6) : ''}</span></div>
                <div className="season-info"><span>{playerAge >= 23 ? 'S'+(current_season - 7) : ''}</span></div>
            </div>
        </div>
        {playerIds.map((playerId) => {
            shirtNumber++;
            return <Player key={playerId}
                shirtNumber={shirtNumber}
                age={playerAge}
                { ...players[playerId] }
            />
        })}
    </div>)
}

Season = connect(
    state => ({
        players: state.Team.byId, 
        current_season: state.Team.data.current_season
    })
)(Season);

export default Season;