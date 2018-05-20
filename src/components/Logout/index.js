import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetAuth } from "../../redux/actions/authActions";

class Logout extends Component {
  render() {
    return (
      <button onClick={this.props.resetAuth} {...this.props}>
        Logout
      </button>
    );
  }
}

Logout.propTypes = {};
Logout.defaultProps = {};

export default connect(null, { resetAuth })(Logout);
