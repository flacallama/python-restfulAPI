import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render () {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <h3 className="brand-logo">DonutTime</h3>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/">Donuts</NavLink></li>
              <li><NavLink to="/stores">Stores</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header;
