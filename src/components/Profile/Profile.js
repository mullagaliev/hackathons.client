import React from 'react';

import ProfileUserInfo from './ProfileUserInfo';
import Stars from './Stars';
import ProfileRanks from './ProfileRanks';
import ProfileBio from './ProfileBio';
import Footer from '../commons/Footer';

const Profile = (props) => {

  return (
    <div className="profile">
      <ProfileUserInfo />

      <Stars stars={0} />

      <div className="profile-rankings">
        <ProfileRanks profileRank={11}>
          Total hackathons
        </ProfileRanks>

        <ProfileRanks profileRank={9}>
          Hackathons wins
        </ProfileRanks>

        <ProfileRanks profileRank={228}>
          XP points
        </ProfileRanks>

        <ProfileRanks profileRank={420}>
          Total tokens
        </ProfileRanks>
      </div>

      <ProfileBio />
      <Footer />
    </div>
  )
}

export default Profile;
