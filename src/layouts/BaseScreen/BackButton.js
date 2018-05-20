import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import styled from "styled-components";
import BackIcon from "../../assets/all/go back.svg";

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 15px;
`;

class BackButton extends Component {
  render() {
    return <Icon src={BackIcon} onClick={() => this.props.history.goBack()} />;
  }
}

BackButton.propTypes = {};
BackButton.defaultProps = {};

export default withRouter(BackButton);
