import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, actions } from "react-redux-form";
import { fetchProfile } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import userAvatar from "../../assets/all/user-avatar.png";
import Input from "../../components/commons/Input";
import TextArea from "../../components/commons/TextArea";
import { signup } from "../../redux/actions/signupActions";

import imageGenerator from "../../utils/imageGenerator";

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
    this.props.fetchDefaultSettings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.DefaultSettings.success &&
      this.props.DefaultSettings.success !== prevProps.DefaultSettings.success
    ) {
      this.props.setDefaultSettings(this.props.DefaultSettings.data);
    }
  }

  render() {
    const { pic, success } = this.props.DefaultSettings;
    const { settings, getNewAvatar } = this.props;
    if (!success) return "Loading...";
    return (
      <Form
        className="profile"
        model="settings"
        onSubmit={settings => this.props.onSubmit(settings)}
      >
        <div className="user-info">
          <div
            className="user-info-img user-info-img--editable"
            onClick={getNewAvatar}
          >
            <img src={settings.pic.value || userAvatar} alt="user avatar" />
          </div>
        </div>
        <LinkList>
          <NavLink className="c-buttons-link" to="/skills">
            Edit skills
          </NavLink>
        </LinkList>
        <FieldsList>
          <Input
            model="settings.username"
            label="Username"
            value={settings.username.value}
            type="text"
            color="#53535F"
            placeholder="User"
          />
          <Input
            model="settings.contactPhone"
            value={settings.contactPhone.value}
            label="Contact Phone"
            color="#53535F"
            placeholder="+79999999999"
          />
          <Input
            model="settings.email"
            value={settings.email.value}
            label="Email"
            type="mail"
            color="#53535F"
            placeholder="user@mail.ru"
          />
          <TextArea
            model="settings.bio"
            value={settings.bio.value}
            label="Bio"
            color="#53535F"
            placeholder="Bio"
          />
        </FieldsList>
      </Form>
    );
  }
}

ProfileSettings.propTypes = {};
ProfileSettings.defaultProps = {
  onSubmit: data => {
    console.log(data);
  }
};

function mapStateToProps(state) {
  return {
    DefaultSettings: state.profile,
    settings: state.forms.settings
  };
}

export default connect(mapStateToProps, {
  fetchDefaultSettings: () => fetchProfile("me"),
  setDefaultSettings: values => actions.load("settings", values),
  getNewAvatar: () => actions.change("settings.pic", imageGenerator())
})(ProfileSettings);
