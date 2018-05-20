import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";
import Container from "../../components/commons/Container";
import ProfileSettings from "../../components/ProfileSettings";

class SettingsScreen extends Component {
  render() {
    return (
      <Screen backButton title="Settings" actionDone={() => {}}>
        <Container>
          <ProfileSettings />
        </Container>
      </Screen>
    );
  }
}

SettingsScreen.propTypes = {};
SettingsScreen.defaultProps = {};

export default SettingsScreen;
