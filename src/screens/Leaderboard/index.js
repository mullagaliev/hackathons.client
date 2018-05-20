import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";
import Leaderboard from "../../components/Leaderboard";

class LeaderboardScreen extends Component {
  render() {
    return (
      <Screen title="Leaderboard" actionProfile={true}>
        <Leaderboard />
      </Screen>
    );
  }
}

LeaderboardScreen.propTypes = {};
LeaderboardScreen.defaultProps = {};

export default LeaderboardScreen;
