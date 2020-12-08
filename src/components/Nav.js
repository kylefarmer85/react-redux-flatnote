import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'
import { Menu } from 'semantic-ui-react'


const Nav = (props) => {

  const handleLogout = () => {
    localStorage.removeItem('my_app_token')
    props.logoutUser()
  }

  return (
    <Menu stackable fluid widths={3}>
        <Menu.Item icon="signup" style={{color: "grey"}} header name="FLATNOTE"/>

        <Menu.Item icon="pencil alternate" as={Link} to={`/notes/new`} name="New Note" />

        <Menu.Item icon="sign-out" onClick={handleLogout} as={Link} to={`/login`} name="Signout" />
    </Menu>
  );
}

export default connect(null, { logoutUser }) (Nav);
