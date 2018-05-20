import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileUserInfo from "./ProfileUserInfo";
import Stars from "./Stars";
import ProfileRanks from "./ProfileRanks";
import ProfileBio from "./ProfileBio";
import SkillsList from "../SkillsList";

import { fetchProfile } from "../../redux/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile("me");
  }

  render() {
    const { profile } = this.props;
    const stat = profile.data ? profile.data.stat : null;
    return (
      <div className="profile">
        <ProfileUserInfo {...profile.data} />

        {/*<Stars stars={4}/>*/}

        {profile.data &&
        profile.data.skills &&
        profile.data.skills.length > 0 ? (
          <SkillsList data={profile.data.skills} />
        ) : (
          <NavLink
            className="c-buttons c-buttons--accent"
            onClick={this.handlerDone}
            style={{ marginBottom: "30px" }}
            to="/skills"
          >
            Add skills
          </NavLink>
        )}

        {stat && (
          <div className="profile-rankings">
            <ProfileRanks profileRank={stat.hackTotal}>
              Total hackathons
            </ProfileRanks>

            <ProfileRanks profileRank={stat.hackWin}>
              Hackathons wins
            </ProfileRanks>

            <ProfileRanks profileRank={stat.xp}>XP points</ProfileRanks>

            <ProfileRanks profileRank={stat.coins}>Total tokens</ProfileRanks>
          </div>
        )}

        {profile.data && profile.data.bio && profile.data.bio.length > 2 ? (
          <ProfileBio bio={profile.data.bio} />
        ) : null}
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
