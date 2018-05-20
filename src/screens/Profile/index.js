import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../../components/commons/Container";
import Screen from "../../layouts/BaseScreen";
import Profile from "../../components/Profile";

class ProfileScreen extends Component {
  render() {
    const { isMy } = this.props;
    return (
      <Screen title="Profile" actionEdit={isMy}>
        <Container>
          <Profile />
        </Container>
      </Screen>
    );
  }
}

ProfileScreen.propTypes = {};
ProfileScreen.defaultProps = {
  isMy: false
};

export default ProfileScreen;
