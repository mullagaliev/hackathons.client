import React from "react";

import Dropdown from "./Dropdown";
import List from "./List";

const LeaderBoard = props => {
  return (
    <div className="leader">
      <Dropdown />
      <List />
    </div>
  );
};

export default LeaderBoard;
