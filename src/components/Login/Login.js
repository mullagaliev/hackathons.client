import React from "react";
import TelegramLoginButton from "react-telegram-login";
import { connect } from "react-redux";

// import Nav from '../Nav';
import LoginButton from "../commons/LoginButton";
import UserAvatar from "../commons/UserAvatar";
import LoginDivider from "./LoginDivider";
import EmailInput from "../commons/EmailInput";
import PasswordInput from "../commons/PasswordInput";
import ForgotPassword from "../commons/ForgotPassword";
import LoginSignup from "./LoginSignup";

import { loginByTelegram } from "../../redux/actions";

const Login = props => {
  const handleTelegramResponse = response => {
    props.loginByTelegram(response);
  };
  return (
    <React.Fragment>
      <div className="login">
        <UserAvatar />
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="Hk64_bot"
        />
        <LoginDivider />
        <EmailInput />
        <PasswordInput />
        <ForgotPassword />
        <LoginButton />
        <LoginSignup />
      </div>
    </React.Fragment>
  );
};

export default connect(null, { loginByTelegram })(Login);
