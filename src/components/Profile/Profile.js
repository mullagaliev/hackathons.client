import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileUserInfo from "./ProfileUserInfo";
import Stars from "./Stars";
import ProfileRanks from "./ProfileRanks";
import ProfileBio from "./ProfileBio";
import SkillsList from "../SkillsList";

import { fetchProfile } from "../../redux/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile(1);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="profile">
        <ProfileUserInfo {...profile.data} />

        <Stars stars={4} />

        <SkillsList />

        <div className="profile-rankings">
          <ProfileRanks profileRank={6}>Total hackathons</ProfileRanks>

          <ProfileRanks profileRank={4}>Hackathons wins</ProfileRanks>

          <ProfileRanks profileRank={288}>XP points</ProfileRanks>

          <ProfileRanks profileRank={420}>Total tokens</ProfileRanks>
        </div>

        <ProfileBio {...profile.data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
