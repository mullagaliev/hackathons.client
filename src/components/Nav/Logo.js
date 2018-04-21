import React from 'react';
import logoImg from '../../assets/img/rh_logo.svg'
const Logo = (props) => {

  return (
    <div className="nav-logo">
      <img src={logoImg} alt="logo" />
    </div>
  )
}

export default Logo;
