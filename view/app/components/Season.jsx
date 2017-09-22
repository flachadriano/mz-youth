import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

let Season = ({ season, shirtNumber, playerIds, players, current_season }) => {
    // the age of a player in the current season
    const playerAge = current_season - season;

    return (<div className="container">
        <span>Season {season}</span>
        <div className="row">
            <span className="col">N</span>
            <span className="col">Name</span>
            <span className="col">Position</span>
            <span className="col">Sell</span>
            <span className="col">{playerAge >= 16 ? 'S'+current_season : ''}</span>
            <span className="col">{playerAge >= 17 ? 'S'+(current_season - 1) : ''}</span>
            <span className="col">{playerAge >= 18 ? 'S'+(current_season - 2) : ''}</span>
            <span className="col">{playerAge >= 19 ? 'S'+(current_season - 3) : ''}</span>
            <span className="col">{playerAge >= 20 ? 'S'+(current_season - 4) : ''}</span>
            <span className="col">{playerAge >= 21 ? 'S'+(current_season - 5) : ''}</span>
            <span className="col">{playerAge >= 22 ? 'S'+(current_season - 6) : ''}</span>
            <span className="col">{playerAge >= 23 ? 'S'+(current_season - 7) : ''}</span>
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