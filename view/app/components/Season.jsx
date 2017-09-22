import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

let Season = ({ playerIds, players }) => {
    console.log(players);
    return (<div>
    {playerIds.map((playerId) =>
        <Player key={playerId} { ...players[playerId] } />
    )}
</div>)
}

Season = connect(
    state => ({ players: state.Team.byId })
)(Season);

export default Season;