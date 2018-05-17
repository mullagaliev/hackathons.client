import React from "react";
import { Switch, Route } from "react-router-dom";

import Dropdown from "./Dropdown";
import OpenHackathons from "./OpenHackathons";
import WaitingHackathons from "./WaitingHackathons";

const Hackathons = props => {
  return (
    <div className="hackathons">
      <p className="hackathons-heading">Hackathons</p>
      <Dropdown />
      <Switch>
        <Route path="/open" exact component={OpenHackathons} />
        <Route path="/waiting" exact component={WaitingHackathons} />
      </Switch>
    </div>
  );
};

export default Hackathons;
