import React from 'react';

import userAvatar from '../../assets/img/user-avatar.jpg';

const ProfileUserInfo = (props) => {
  const { name, skill, pic } = props;
  return (
    <div className="user-info">
      <div className="user-info-img" >
        <img src={pic || userAvatar} alt="user avatar" />
      </div>
      <p className="user-info-title">{name || 'Mary Ann'}</p>
      <p className="user-info-position">{skill || 'Motion Designer'}</p>
    </div>
  )
}

export default ProfileUserInfo;
