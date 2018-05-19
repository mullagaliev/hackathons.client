import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputStyled = styled.input`
  font-family: inherit;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  padding: 4px 0px;
  color: ${props => (props.color ? props.color : "inherit")};
  display: block;
  width: 100%;
  border-bottom: 1px solid ${props => (props.color ? props.color : "#53535f")};
  font-size: 14px;
  letter-spacing: 0.05px;
  &::placeholder {
    color: ${props => (props.color ? props.color : "inherit")};
    opacity: 0.7;
  }
`;

class Input extends Component {
  render() {
    return <InputStyled {...this.props} />;
  }
}

Input.propTypes = {};
Input.defaultProps = {
  color: "white"
};

export default Input;
