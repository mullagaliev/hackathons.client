import React from "react";
import { connect } from "react-redux";

import { loginByEmail } from "../../redux/actions";
const LoginButton = props => {
  const { showTelegram } = props;

  const handleClick = () => {
    const { loginByEmail, email, pass } = props;
    loginByEmail(email, pass);
  };

  if (showTelegram) {
    return (
      <button className="btn btn-login">
        <span className="fab fa-telegram-plane btn-login__icon" />Login with
        Telegram
      </button>
    );
  }
  return (
    <button onClick={handleClick} className="btn btn-login">
      Login
    </button>
  );
};

function mapStateToProps(state) {
  return {
    email: state.form.email,
    pass: state.form.pass
  };
}

export default connect(mapStateToProps, { loginByEmail })(LoginButton);
