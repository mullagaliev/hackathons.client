import React from "react";
import { withRouter } from "react-router-dom";

const LoginSignup = props => {
  const { history } = props;
  const handleClick = props => {
    history.push("/login");
  };
  return (
    <div className="signup-login">
      <p className="signup-login-p">
        Do you have an acount?{" "}
        <span onClick={handleClick} className="signup-login-span">
          Log in
        </span>
      </p>
    </div>
  );
};

export default withRouter(LoginSignup);
