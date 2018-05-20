import React from "react";

const ProfileBio = props => {
  const { bio } = props;

  return (
    <div className="profile-bio">
      <p className="profile-bio__title">Bio:</p>
      <p className="profile-bio__desc">
        {bio && bio.length > 2 ? bio : "Empty"}
      </p>
    </div>
  );
};

export default ProfileBio;
