import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProfileIcon from "../../assets/all/profile.svg";
import LeaderboardIcon from "../../assets/all/forward.svg";
import AvatarIcon from "../../assets/img/user-avatar.jpg";
import ExitIcon from "../../assets/all/go back.svg";

const LinkItem = styled(NavLink)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 60px;
  line-height: 20px;
  padding-left: 25px;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    color: black;
    img {
      display: none;
    }
  }
  &.active {
    background-color: #ffffff;
    color: black;
    img {
      display: none;
    }
  }
  font-family: "Muller", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
`;

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 20px;
  margin-right: 20px;
`;

const UserProfile = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 85px;
  border-bottom: 3px solid #ffffff;
  padding: 20px;
  img {
    height: 40px;
    width: auto;
    margin-right: 20px;
    border-radius: 100%;
  }
  span {
    font-family: "Muller", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
  }
  .Profile__exit {
    position: absolute;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: white;
    cursor: pointer;
  }
`;

class LeftMenu extends Component {
  render() {
    return (
      <Fragment>
        <UserProfile>
          <img src={AvatarIcon} alt="Avatar" />
          <span>
            AI<br />community
          </span>
          <span className="Profile__exit" />
        </UserProfile>
        <nav>
          <LinkItem to="/myprofile">
            <Icon src={ProfileIcon} alt="Profile" />
            My profile
          </LinkItem>
          <LinkItem to="/leaderboard">
            <Icon src={LeaderboardIcon} alt="Leaderboard" />
            Leaderboard
          </LinkItem>
        </nav>
      </Fragment>
    );
  }
}

LeftMenu.propTypes = {};
LeftMenu.defaultProps = {};

export default LeftMenu;
