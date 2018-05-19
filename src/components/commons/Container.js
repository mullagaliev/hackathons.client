import React, { Component } from "react";
import PropTypes from "prop-types";

class Container extends Component {
  render() {
    return (
      <div className="container" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
