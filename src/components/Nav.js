import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {

  const navStyle = {
    color: 'white'
  }

  // const renderLinks = () => {
  //   only let links show up if logged in
  // }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to={'/notes/new'}>
        <li>New Note</li>
        </Link>
        <Link style={navStyle} to={'/signout'}>
        <li>Sign Out</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
