import React from 'react';

// import userAvatar from '../../assets/img/user-avatar.jpg';

const ProfileUserInfo = (props) => {
  const { name, skill, pic } = props;
  return (
    <div className="user-info">
      <div className="user-info-img" >
        <img src={pic} alt="user avatar" />
      </div>
      <p className="user-info-title">{name}</p>
      <p className="user-info-position">{skill}</p>
    </div>
  )
}

export default ProfileUserInfo;
