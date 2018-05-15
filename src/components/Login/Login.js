import React from "react";
import TelegramLoginButton from "react-telegram-login";
// import Nav from '../Nav';
import LoginButton from "../commons/LoginButton";
import UserAvatar from "../commons/UserAvatar";
import LoginDivider from "./LoginDivider";
import EmailInput from "../commons/EmailInput";
import PasswordInput from "../commons/PasswordInput";
import ForgotPassword from "../commons/ForgotPassword";
import LoginSignup from "./LoginSignup";

const Login = props => {
  const handleTelegramResponse = response => {
    console.log(response);
  };
  return (
    <React.Fragment>
      <div className="login">
        <UserAvatar />
        <LoginButton showTelegram />
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="leader_board_bot"
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

export default Login;
