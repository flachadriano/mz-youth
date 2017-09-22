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
        let { seasionPlayers } = this.props;
        return (<div>
            {Object.keys(seasionPlayers).forEach((seasion) => {
                <span>oi</span>
            })}
        </div>)
    }
};

Team = connect(
    state => ({
        seasionPlayers: state.Team.bySeason || [],
        authToken: state.Login.authToken
    }),
    { ...service }
)(Team);

export default Team;