import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";
import SignUp from "../../components/SignUp";
import Container from "../../components/commons/Container";

class SignUpScreen extends Component {
  render() {
    return (
      <Screen nav={false} style={{ backgroundColor: "#3F87F5" }}>
        <Container>
          <SignUp />
        </Container>
      </Screen>
    );
  }
}

SignUpScreen.propTypes = {};
SignUpScreen.defaultProps = {};

export default SignUpScreen;
