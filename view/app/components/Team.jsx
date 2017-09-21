import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import * as service from '../services/Team';

class Team extends React.Component {
    componentDidMount() {
        let { getPlayers, auth_token } = this.props;
        getPlayers(auth_token).then(response => console.log(response));
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
console.log(service);
Team = connect(
    (state) => ({
        players: state.players,
        auth_token: state.auth_token
    }),
    { ...service }
)(Team);

export default Team;