import React from "react";
import { connect } from "react-redux";

import { setPass } from "../../redux/actions";
class Password extends React.Component {
  handleOnChange = e => {
    const { setPass } = this.props;
    setPass(e.target.value);
  };

  render() {
    const { pass } = this.props;
    return (
      <div className="input-group">
        <input
          onChange={this.handleOnChange}
          className="input input-password"
          type="password"
          placeholder="Password"
          value={pass}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pass: state.form.pass
  };
}

export default connect(mapStateToProps, { setPass })(Password);
