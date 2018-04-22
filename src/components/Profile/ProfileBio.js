import React from 'react';

const ProfileBio = (props) => {
  const { bio } = props

  return (
    <div className="profile-bio">
      <p className="profile-bio__title">Bio:</p>
      <p className="profile-bio__desc">{bio || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}</p>
    </div>
  )
}

export default ProfileBio;
