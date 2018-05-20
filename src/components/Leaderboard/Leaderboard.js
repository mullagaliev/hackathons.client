import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dropdown from "./Dropdown";
import List from "./List";
import { getLeaderboard } from "../../redux/actions/leaderboardActions";

class Leaderboard extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.getLeaderboard();
    }, 100);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="leader">
        <Dropdown />
        <List data={data} />
      </div>
    );
  }
}

Leaderboard.propTypes = {};
Leaderboard.defaultProps = {};

export default connect(
  state => {
    return {
      data: state.users.data
    };
  },
  { getLeaderboard }
)(Leaderboard);
