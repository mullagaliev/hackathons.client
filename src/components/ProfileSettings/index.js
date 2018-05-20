import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import userAvatar from "../../assets/img/user-avatar.jpg";
import Input from "../../components/commons/Input";
import TextArea from "../../components/commons/TextArea";

const LinkList = styled.div`
  width: 100%;
  margin-bottom: 30px;
  & > * {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FieldsList = styled.div`
  width: 100%;
  margin-bottom: 30px;
  & > * {
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  padding-bottom: 60px;
`;

class ProfileSettings extends Component {
  componentDidMount() {
    this.props.fetchProfile(1);
  }

  render() {
    const { pic } = this.props;
    return (
      <div className="profile">
        <div className="user-info">
          <div className="user-info-img user-info-img--editable">
            <img src={pic || userAvatar} alt="user avatar" />
          </div>
        </div>
        <LinkList>
          <NavLink className="c-buttons-link" to="/skills">
            Edit skills
          </NavLink>
        </LinkList>
        <FieldsList>
          <Input
            name="username"
            label="Username"
            color="#53535F"
            placeholder="User"
          />
          <Input
            name="contactPhone"
            label="Contact Phone"
            color="#53535F"
            placeholder="+79999999999"
          />
          <Input
            name="email"
            label="Email"
            color="#53535F"
            placeholder="user@mail.ru"
            type="email"
          />
          <TextArea name="bio" label="Bio" color="#53535F" placeholder="Bio" />
        </FieldsList>
      </div>
    );
  }
}

ProfileSettings.propTypes = {};
ProfileSettings.defaultProps = {};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps, { fetchProfile })(ProfileSettings);
