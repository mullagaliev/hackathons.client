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
      return (
        <div className="profile">
          <ProfileUserInfo {...profile.data} />

          <Stars stars={profile.data.stat.hackWin || 4} />

          <div className="profile-rankings">
            <ProfileRanks profileRank={profile.data.stat.hackTotal || 6}>
              Total hackathons
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.hackTotal || 4}>
              Hackathons wins
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.xp || 288}>
              XP points
            </ProfileRanks>

            <ProfileRanks profileRank={profile.data.stat.coins || 420}>
              Total tokens
            </ProfileRanks>
          </div>

          <ProfileBio {...profile.data} />
          <Footer />
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, { fetchProfile})(Profile);
