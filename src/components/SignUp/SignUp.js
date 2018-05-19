import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AvatarIcon from "../../assets/all/_avatar.svg";
import Inpute from "../../components/commons/Input";
import SignupLogin from "./SignupLogin";

const SignUpForm = styled.form`
  padding-top: 90px;
  .SignUpForm__welcome {
    margin-bottom: 30px;
  }
  .SignUpForm__icon {
    display: block;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  .SignUpForm__title {
    display: block;
    font-family: "AvenirNextCyr-Regular", sans-serif;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0.05px;
    text-align: center;
  }
  .SignUpForm__inputs {
    & > * {
      margin-bottom: 20px;
    }
  }
  .SignUpForm__button {
    margin-bottom: 25px;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

class SignUp extends Component {
  render() {
    return (
      <SignUpForm>
        <div className="SignUpForm__welcome">
          <Icon src={AvatarIcon} className="SignUpForm__icon" />
          <span className="SignUpForm__title">
            Hey there! You can start by creating a new accounts
          </span>
        </div>
        <div className="SignUpForm__inputs">
          <Inpute type="email" placeholder="E-mail" />
          <Inpute type="email" placeholder="E-mail" />
          <Inpute type="email" placeholder="E-mail" />
          <Inpute type="email" placeholder="E-mail" />
        </div>
        <button className="btn btn-sign-up SignUpForm__button" type="submit">
          Sign Up
        </button>
        <SignupLogin />
      </SignUpForm>
    );
  }
}

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
