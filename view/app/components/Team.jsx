import React from 'react';
import Player from './Player';

const Team = ({ players }) => (
    <div>
        {players.map(player => (
            <Player key={player.id} {...player} />
        ))}
    </div>
);

export default Team;