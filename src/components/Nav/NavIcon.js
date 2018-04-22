import React from 'react';
import { connect } from 'react-redux';

import { showNav } from '../../redux/actions';

const NavIcon = (props) => {
  const { showNav, location } = props;

  if(location === '/') {
    return null;
  }else {
    return (
      <div className="nav-burger" onClick={showNav}>
        <span className="nav-burger__span">

        </span>
      </div>)
  }
}

export default connect(null, { showNav })(NavIcon);
