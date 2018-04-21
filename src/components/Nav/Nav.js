import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import NavIcon from './NavIcon';
import Logo from './Logo';

class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <div className="nav-nav">
          <span className="nav-nav__close">&times;</span>
          <ul className="nav-nav__list">
            <li className="nav-nav__item"><NavLink className="nav-nav__link" to="/">Home</NavLink></li>
            <li className="nav-nav__item"><NavLink className="nav-nav__link" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-nav__item"><NavLink className="nav-nav__link" to="/hackathons">Hackathons</NavLink></li>
            <li className="nav-nav__item"><NavLink className="nav-nav__link" to="/shop">Shop</NavLink></li>
          </ul>
          <Logo />
        </div>
        <div className="nav-container">
            <NavIcon />
            <Logo />
        </div>

      </nav>
    )
  }
}

export default Nav
