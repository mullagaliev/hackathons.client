import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../../components/commons/Container";
import Screen from "../../layouts/BaseScreen";
import Profile from "../../components/Profile";

class ProfileScreen extends Component {
  render() {
    const { isMy, id } = this.props;
    return (
      <Screen nav={isMy} title="Profile" actionEdit={isMy}>
        <Container>
          <Profile isMy={isMy} id={id} />
        </Container>
      </Screen>
    );
  }
}

ProfileScreen.propTypes = {};
ProfileScreen.defaultProps = {
  id: "me",
  isMy: false
};

export default ProfileScreen;
