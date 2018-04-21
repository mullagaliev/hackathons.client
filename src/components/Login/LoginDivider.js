import React from 'react';

const LoginDivider = (props) => {

  return (
    <div className="divider">
      <div className="login-divider">
        <span className="login-divider__line"></span> or <span className="login-divider__line"></span>
      </div>
      <p className="login-divider__text">Enter your login credentials to get access:</p>
    </div>

  )
}

export default LoginDivider;
