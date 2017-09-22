import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Season from './Season';
import * as service from '../reducers/Team';

class Team extends React.Component {
    componentDidMount() {
        let { loadPlayers, authToken } = this.props;
        loadPlayers(authToken);
    }

    render() {
        let { seasonPlayers } = this.props;
        let shirtNumber = 0;
        return (<div>
            {Object.keys(seasonPlayers).map((season) => {
                shirtNumber += 10;
                return <Season key={season}
                    season={season}
                    shirtNumber={shirtNumber}
                    playerIds={seasonPlayers[season]}
                />
            })}
        </div>)
    }
};

Team = connect(
    state => ({
        seasonPlayers: state.Team.bySeason || [],
        authToken: state.Session.authToken
    }),
    dispatch => ({ ...bindActionCreators(service, dispatch) })
)(Team);

export default Team;