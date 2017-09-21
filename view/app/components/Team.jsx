import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import * as service from '../reducers/Team';

class Team extends React.Component {
    componentDidMount() {
        let { loadPlayers, authToken } = this.props;
        loadPlayers(authToken);
    }

    render() {
        let { players } = this.props;
        players = players || [];
        return (<div>
            {players.map(player => (
                <Player key={player.id} {...player} />
            ))}
        </div>)
    }
};

Team = connect(
    state => ({
        players: state.players,
        authToken: state.authToken
    }),
    { ...service }
)(Team);

export default Team;