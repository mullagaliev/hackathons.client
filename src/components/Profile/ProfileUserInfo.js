import React from "react";

import userAvatar from "../../assets/img/user-avatar.jpg";

const ProfileUserInfo = props => {
  const { username, skills = [], pic } = props;
  return (
    <div className="user-info">
      <div className="user-info-img">
        <img src={pic || userAvatar} alt="user avatar" />
      </div>
      <p className="user-info-title">{username || "???"}</p>
      <p className="user-info-position">
        {skills.length > 0 ? skills[0].tag : null}
      </p>
    </div>
  );
};

export default ProfileUserInfo;
