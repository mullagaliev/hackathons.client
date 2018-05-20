import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, actions } from "react-redux-form";

import Screen from "../../layouts/BaseScreen";
import Container from "../../components/commons/Container";
import ProfileSettings from "../../components/ProfileSettings";
import { updateProfile } from "../../redux/actions/profileActions";

class SettingsScreen extends Component {
  render() {
    console.log(this.props.settings.$form.value);
    return (
      <Screen
        backButton
        title="Settings"
        actionDone={() => {
          const values = { ...this.props.settings };
          const valuesFormated = {
            username: values.username.value,
            contactPhone: values.contactPhone.value
              ? values.contactPhone.value
              : " ",
            bio: values.bio.value ? values.bio.value : " ",
            pic: values.pic.value ? values.pic.value : "1",
            skills: values.skills.value ? values.skills.value : [],
            email: values.email.value
          };
          this.props.updateProfile("me", valuesFormated);
        }}
      >
        <Container>
          <ProfileSettings />
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
