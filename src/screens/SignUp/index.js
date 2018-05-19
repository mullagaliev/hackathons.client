import React, { Component } from "react";
import PropTypes from "prop-types";
import Screen from "../../layouts/BaseScreen";

class SignUpScreen extends Component {
  render() {
    return <Screen nav={false} style={{ backgroundColor: "#3F87F5" }} />;
  }
}

SignUpScreen.propTypes = {};
SignUpScreen.defaultProps = {};

export default SignUpScreen;
