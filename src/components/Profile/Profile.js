import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileUserInfo from './ProfileUserInfo';
import Stars from './Stars';
import ProfileRanks from './ProfileRanks';
import ProfileBio from './ProfileBio';
import Footer from '../commons/Footer';

import { fetchProfile } from '../../redux/actions';

class Profile extends Component {

  componentDidMount() {
    this.props.fetchProfile(1);
  }

  render() {

    const { profile } = this.props
    if(profile.requesting) {
      return(
        <div className="profile">Loading...</div>
      )
    }
    if(profile.success) {
      return (
        <div className="profile">
          <ProfileUserInfo {...profile.data} />

          <Stars stars={profile.data.stat.hackWin} />

          <div className="profile-rankings">
            <ProfileRanks profileRank={profile.data.stat.hackTotal}>
              Total hackathons
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.hackTotal}>
              Hackathons wins
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.xp}>
              XP points
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.coins}>
              Total tokens
            </ProfileRanks>
          </div>

          <ProfileBio {...profile.data} />
          <Footer />
        </div>
      )
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, { fetchProfile})(Profile);
