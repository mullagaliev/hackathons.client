import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Leaderboard from "./components/Leaderboard";
import Hackathons from "./components/Hackathons";
import Signup from "./components/Signup";

const App = props => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/hackathons/:status" component={Hackathons} />
        <Route component={Profile} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
