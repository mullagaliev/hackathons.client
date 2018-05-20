import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, actions } from "react-redux-form";

import Screen from "../../layouts/BaseScreen";
import Container from "../../components/commons/Container";
import ProfileSettings from "../../components/ProfileSettings";
import { updateProfile } from "../../redux/actions/profileActions";

import imageGenerator from "../../utils/imageGenerator";

class SettingsScreen extends Component {
  handlerDone = () => {
    const values = { ...this.props.settings };
    const skills = values.skills
      ? values.skills.$form.value.map(item => {
          return {
            id: item.id
          };
        })
      : [];
    const valuesFormated = {
      username: values.username.value,
      contactPhone: values.contactPhone.value ? values.contactPhone.value : " ",
      bio: values.bio.value ? values.bio.value : " ",
      pic: values.pic.value ? values.pic.value : imageGenerator(),
      skills: skills ? skills : [],
      email: values.email.value
    };
    this.props.updateProfile("me", valuesFormated);
  };

  render() {
    return (
      <Screen backButton title="Settings" actionDone={this.handlerDone}>
        <Container>
          <ProfileSettings actionDone={this.handlerDone} />
        </Container>
      </Screen>
    );
  }
}

SettingsScreen.propTypes = {};
SettingsScreen.defaultProps = {};

function mapStateToProps(state) {
  return {
    settings: state.forms.settings
  };
}

export default connect(mapStateToProps, {
  updateProfile
})(SettingsScreen);
