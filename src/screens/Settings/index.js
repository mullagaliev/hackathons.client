import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";

class SettingsScreen extends Component {
  render() {
    return <Screen title="Settings" actionDone={() => {}} />;
  }
}

SettingsScreen.propTypes = {};
SettingsScreen.defaultProps = {};

export default SettingsScreen;
