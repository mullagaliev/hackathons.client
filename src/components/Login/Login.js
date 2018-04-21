import React from 'react';

// import Nav from '../Nav';
import LoginButton from '../commons/LoginButton';
import UserAvatar from '../commons/UserAvatar';
import LoginDivider from './LoginDivider';
import EmailInput from '../commons/EmailInput';
import PasswordInput from '../commons/PasswordInput';
import ForgotPassword from '../commons/ForgotPassword';
import LoginSignup from './LoginSignup';

const Login = (props) => {
  return (
    <React.Fragment>

      <div className="login">
        <UserAvatar />
        <LoginButton showTelegram/>
        <LoginDivider />
        <EmailInput />
        <PasswordInput />
        <ForgotPassword />
        <LoginButton />
        <LoginSignup />
      </div>
    </React.Fragment>
  )
}

export default Login;
