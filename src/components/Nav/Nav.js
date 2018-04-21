import React from 'react';

import NavIcon from './NavIcon';
import Logo from './Logo';

const Nav = (props) => {

  return (
    <nav className="nav">
      <div className="nav-container">
        <NavIcon />
        <Logo />
      </div>

    </nav>
  )
}

export default Nav
