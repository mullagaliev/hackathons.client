import React from 'react';
import { withRouter } from 'react-router-dom'

const LoginButton = (props) => {
  const { showTelegram, history } = props;

  const changeRoute = () => {
    history.push('/profile');
  }

  if(showTelegram) {
    return (
      <button onClick={changeRoute} className="btn btn-login"><span className="fab fa-telegram-plane btn-login__icon"></span>Login with Telegram</button>
    )
  }
  return (
    <button onClick={changeRoute} className="btn btn-login">Login</button>
  )
}

export default withRouter(LoginButton);
