import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputStyled = styled.textarea`
  outline: 0;
  font-family: inherit;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  padding: 4px 0px;
  min-height: 100px;
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

const LabelStyled = styled.label`
  opacity: 0.5;
  color: ${props => (props.color ? props.color : "inherit")};
  font-family: inherit;
  font-size: 18px;
  letter-spacing: 0.06px;
  margin-bottom: 5px;
`;

class TextArea extends Component {
  render() {
    const { label, color } = this.props;
    return (
      <div>
        {label && <LabelStyled color={color}>{label}</LabelStyled>}
        <InputStyled {...this.props} />
      </div>
    );
  }
}

TextArea.propTypes = {};
TextArea.defaultProps = {
  label: null,
  color: "white"
};

export default TextArea;
