import React from 'react';

const PlayerInfo = ({}) => (<div className="season-info">
        {age >= 16 ? <input type="checkbox" defaultChecked={season_one} /> : ''}
</div>);

const Player = ({ id, shirtNumber, age, name, position_name, sell, season_one, season_two, season_three, 
        season_four, season_five, season_six, season_seven, season_eight }) => {

    const onClick = () => {

    }

    return (<div className="row player">
        <span className="col-1">{shirtNumber}</span>
        <span className="col-3">{name}</span>
        <span className="col-2">{position_name}</span>
        <span className="col-1"><input type="checkbox" defaultChecked={sell} /></span>
        <div className="col-5 season-info-container">
            <div className="season-info">{age >= 16 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 17 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 18 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 19 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 20 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 21 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 22 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
            <div className="season-info">{age >= 23 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</div>
        </div>
    </div>)
}

export default Player;