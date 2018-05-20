import React from "react";

import { SORT_BY_WINS, SORT_BY_XP } from "../../redux/constants";

const ListItem = props => {
  const { username, wins, xp, pic, rank, sortBy } = props;
  return (
    <div className="leader-item">
      <div className="leader-left">
        <p className="leader-item__rank">{rank + 1}.</p>

        <div className="leader-item__img">
          <img src={pic} alt="user avatar" />
        </div>

        <p className="leader-item__name">{username}</p>
      </div>

      {sortBy === SORT_BY_WINS && <p className="leader-item__points">{wins}</p>}

      {sortBy === SORT_BY_XP && <p className="leader-item__points">{xp}</p>}
    </div>
  );
};

export default ListItem;
