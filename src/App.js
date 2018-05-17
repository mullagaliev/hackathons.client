import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Leaderboard from "./components/Leaderboard";
import Hackathons from "./components/Hackathons";
import Signup from "./components/Signup";
import userIsAuthenticated from "./components/HoC/userIsAuthenticated";
import userIsNotAuthenticated from "./components/HoC/userIsNotAuthenticated";

const App = props => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact component={userIsNotAuthenticated(Login)} />
        <Route
          path="/signup"
          exact
          component={userIsNotAuthenticated(Signup)}
        />
        <Route path="/profile" exact component={userIsAuthenticated(Profile)} />
        <Route
          path="/leaderboard"
          exact
          component={userIsAuthenticated(Leaderboard)}
        />
        <Route
          path="/hackathons/:status"
          component={userIsAuthenticated(Hackathons)}
        />
        <Route component={Profile} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
