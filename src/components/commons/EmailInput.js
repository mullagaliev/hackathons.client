import React from "react";
import { connect } from "react-redux";

import { setEmail } from "../../redux/actions";
class EmailInput extends React.Component {
  handleOnChange = e => {
    const { setEmail } = this.props;
    setEmail(e.target.value);
  };
  render() {
    const { email } = this.props;
    return (
      <div className="input-group">
        <input
          onChange={this.handleOnChange}
          className="input input-email"
          type="email"
          placeholder="E-mail"
          value={email}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.form.email
  };
}

export default connect(mapStateToProps, { setEmail })(EmailInput);
