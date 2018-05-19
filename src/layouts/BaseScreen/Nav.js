import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import MenuIcon from "../../assets/all/menu.svg";
import EditIcon from "../../assets/all/edit.svg";
import ProfileIcon from "../../assets/all/profile.svg";
import DoneIcon from "../../assets/all/done.svg";

const NavItems = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .Nav__item {
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
    font-family: "AvenirNextCyr-Regular", sans-serif;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    letter-spacing: 0.06px;
    text-align: center;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 15px;
`;

class Nav extends Component {
  render() {
    const {
      onToggleMenu,
      actionEdit,
      actionProfile,
      actionDone,
      title
    } = this.props;
    return (
      <NavItems>
        <span className="Nav__item" onClick={onToggleMenu}>
          <Icon src={MenuIcon} />
        </span>
        <span className="Header__title">{title}</span>
        <div>
          {actionEdit && (
            <NavLink to="/settings" className="Nav__item">
              <Icon src={EditIcon} />
            </NavLink>
          )}
          {actionProfile && (
            <NavLink to="/myprofile" className="Nav__item">
              <Icon src={ProfileIcon} />
            </NavLink>
          )}
          {actionDone && (
            <span className="Nav__item" onClick={actionDone}>
              <Icon src={DoneIcon} />
            </span>
          )}
        </div>
      </NavItems>
    );
  }
}

Nav.propTypes = {};
Nav.defaultProps = {
  onToggleMenu: () => {},
  actionEdit: false,
  actionProfile: false,
  actionDone: false
};

export default Nav;
