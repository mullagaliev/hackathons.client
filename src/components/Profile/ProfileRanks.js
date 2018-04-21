import React from 'react';

const ProfileRanks = (props) => {
  const { profileRank, children } = props;

  return (
    <div className="profile-rank">
      <p className="profile-rank__qty">{profileRank}</p>
      <p className="profile-rank__desc">{children}</p>
    </div>
  )
}

export default ProfileRanks;
