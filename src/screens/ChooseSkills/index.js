import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";
import Container from "../../components/commons/Container";
import SelectSkillsList from "../../components/SkillsList/SelectSkillsList";

class ChooseSkillsScreen extends Component {
  render() {
    return (
      <Screen title="Choose skills" actionProfile={() => {}}>
        <Container>
          <SelectSkillsList />
        </Container>
      </Screen>
    );
  }
}

ChooseSkillsScreen.propTypes = {};
ChooseSkillsScreen.defaultProps = {};

export default ChooseSkillsScreen;
