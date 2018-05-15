import React from "react";
import { withRouter } from "react-router-dom";

const LoginSignup = props => {
  const { history } = props;
  const handleClick = props => {
    history.push("/signup");
  };
  return (
    <div className="login-signup">
      <p className="login-signup-p">
        Don’t have an acount?{" "}
        <span onClick={handleClick} className="login-signup-span">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default withRouter(LoginSignup);
