import React from 'react';

import userAvatar from '../../assets/img/user-avatar.jpg';

const ProfileUserInfo = (props) => {

  return (
    <div className="user-info">
      <div className="user-info-img" >
        <img src={userAvatar} alt="user avatar" />
      </div>
      <p className="user-info-title">Mary Ann</p>
      <p className="user-info-position">Motion Designer</p>
    </div>
  )
}

export default ProfileUserInfo;
