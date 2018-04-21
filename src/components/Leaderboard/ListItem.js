import React from 'react';

import userAvatar from '../../assets/img/user-avatar.jpg';

const ListItem = (props) => {
  const { rank } = props
  return (
    <div className="leader-item">

    <div className="leader-left">
      <p className="leader-item__rank">{rank}.</p>

      <div className="leader-item__img">
        <img src={userAvatar} alt="user avatar"/>
      </div>

      <p className="leader-item__name">Mary Ann</p>
    </div>

    <p className="leader-item__points">228</p>

    </div>
  )
}

export default ListItem;
