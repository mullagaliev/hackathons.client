import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsList from "./index";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { getSkills } from "../../redux/actions/skillsActions";
import {
  fetchProfile,
  updateProfile
} from "../../redux/actions/profileActions";

const SelectSkillsListStyled = styled.div`
  margin-top: 30px;
  h2 {
    font-family: "AvenirNextCyr-Light", sans-serif;
    font-size: 18px;
    color: #3f87f5;
    letter-spacing: 0.06px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

class SelectSkillsList extends Component {
  state = {
    curSelectedIds: []
  };

  handlerChange = selectedIds => {
    const { dispatch } = this.props;
    this.setState({ curSelectedIds: selectedIds });
    dispatch(
      actions.change(
        "settings.skills",
        selectedIds.map(skill => {
          return { id: skill };
        })
      )
    );
  };

  handlerDone = () => {
    const { dispatch, profile } = this.props;

    const values = { ...this.props.settings };
    const skills = values.skills
      ? values.skills.$form.value.map(item => {
          return {
            id: item.id
          };
        })
      : [];

    const valuesFormated = {
      username: profile.data.username,
      contactPhone: profile.data.contactPhone ? profile.data.contactPhone : " ",
      bio: profile.data.bio ? profile.data.bio : " ",
      pic: profile.data.pic ? profile.data.pic : "",
      skills: skills ? skills : [],
      email: profile.data.email
    };
    dispatch(updateProfile("me", valuesFormated));
  };

  componentDidMount() {
    this.props.dispatch(getSkills());
    if (!this.props.profile.success) {
      this.props.dispatch(fetchProfile("me"));
    }
  }

  render() {
    const { skills, profile } = this.props;
    const { curSelectedIds } = this.state;
    if (!skills.success || !profile.success) return "Loading...";
    const selectedIds = profile.data.skills.map(skill => {
      return skill.id;
    });
    return (
      <SelectSkillsListStyled>
        <h2>Choose up to 5 skills:</h2>
        <SkillsList
          style={{ marginBottom: "20px" }}
          data={skills.data}
          select
          default_selectedIds={selectedIds}
          onChange={this.handlerChange}
          {...this.props}
        />
        <button
          disabled={curSelectedIds.length === 0 || curSelectedIds.length > 5}
          className="c-buttons c-buttons--primary"
          onClick={this.handlerDone}
        >
          Done!
        </button>
      </SelectSkillsListStyled>
    );
  }
}

SelectSkillsList.propTypes = {};
SelectSkillsList.defaultProps = {
  skills: [
    {
      id: 1,
      tag: "Backend"
    },
    {
      id: 2,
      tag: "Frontend"
    }
  ]
};

function mapStateToProps(state) {
  return {
    skills: state.skills,
    profile: state.profile,
    settings: state.forms.settings
  };
}

export default connect(mapStateToProps, null)(SelectSkillsList);
