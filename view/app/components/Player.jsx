import React from 'react';

const Player = ({ shirtNumber, age, name, position_name, sell, season_one, season_two, season_three, 
        season_four, season_five, season_six, season_seven, season_eight }) => (
    <div className="row">
        <span className="col">{shirtNumber}</span>
        <span className="col">{name}</span>
        <span className="col">{position_name}</span>
        <span className="col"><input type="checkbox" defaultChecked={sell} /></span>
        <span className="col">{age >= 16 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 17 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 18 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 19 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 20 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 21 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 22 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
        <span className="col">{age >= 23 ? <input type="checkbox" defaultChecked={season_one} /> : ''}</span>
    </div>
)

export default Player;