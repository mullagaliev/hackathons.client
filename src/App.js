import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Hackathons from "./components/Hackathons";
import SignUpScreen from "./screens/SignUp";
import SettingsScreen from "./screens/Settings";
import ChooseSkillsScreen from "./screens/ChooseSkills";
import ProfileScreen from "./screens/Profile";
import LeaderboardScreen from "./screens/Leaderboard";

import userIsAuthenticated from "./components/HoC/userIsAuthenticated";
import userIsNotAuthenticated from "./components/HoC/userIsNotAuthenticated";

const App = props => {
  return (
    <React.Fragment>
      {/*<Nav />*/}
      <Switch>
        <Route path="/login" exact component={userIsNotAuthenticated(Login)} />
        <Route
          path="/signup"
          exact
          component={userIsNotAuthenticated(SignUpScreen)}
        />
        <Route
          path="/settings"
          exact
          component={userIsAuthenticated(SettingsScreen)}
        />
        <Route
          path="/skills"
          exact
          component={userIsAuthenticated(ChooseSkillsScreen)}
        />
        <Route
          path="/myprofile"
          exact
          component={userIsAuthenticated(() => <ProfileScreen isMy={true} />)}
        />
        <Route path="/profile" exact component={userIsAuthenticated(Profile)} />
        <Route
          path="/leaderboard"
          exact
          component={userIsAuthenticated(LeaderboardScreen)}
        />
        <Route
          path="/hackathons/:status"
          component={userIsAuthenticated(Hackathons)}
        />
        {/*<Route component={Login} />*/}
        <Route component={() => <ProfileScreen isMy={false} />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
