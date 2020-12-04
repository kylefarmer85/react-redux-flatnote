import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'


const Nav = (props) => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to={'/notes/new'}>
        <li>New Note</li>
        </Link>
        <Link style={navStyle} to={'/login'} onClick={props.logoutUser}>
        <li>Sign Out</li>
        </Link>
      </ul>
    </nav>
  );
}

export default connect(null, { logoutUser }) (Nav);
