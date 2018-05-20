import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkItem = styled(NavLink)`
  display: block;
  font-family: "AvenirNextCyr-Regular", sans-serif;
  text-decoration: none;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0.06px;
  text-align: center;
  height: 40px;
  line-height: 20px;
  background-color: transparent;
  &:hover {
    opacity: 0.7;
  }
  &.active {
    opacity: 0.7;
  }
`;

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 20px;
  margin-right: 20px;
`;

class LeftMenu extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <LinkItem to="/myprofile">My profile</LinkItem>
          <LinkItem to="/leaderboard">Leaderboard</LinkItem>
        </nav>
      </Fragment>
    );
  }
}

LeftMenu.propTypes = {};
LeftMenu.defaultProps = {};

export default LeftMenu;
