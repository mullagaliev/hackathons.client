import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";
import Container from "../../components/commons/Container";

class SettingsScreen extends Component {
  render() {
    return (
      <Screen title="Settings" actionDone={() => {}}>
        <Container>
          <h1>hello</h1>
        </Container>
      </Screen>
    );
  }
}

SettingsScreen.propTypes = {};
SettingsScreen.defaultProps = {};

export default SettingsScreen;
