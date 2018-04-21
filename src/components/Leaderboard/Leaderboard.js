import React from 'react';

import Dropdown from './Dropdown';
import List from './List';

const LeaderBoard = (props) => {

  return (
    <div className="leader">
        <p className="leader-heading">Leaderboard</p>
        <Dropdown />
        <List />
    </div>
  );
}

export default LeaderBoard
