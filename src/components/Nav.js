import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'
import { Menu } from 'semantic-ui-react'


const Nav = (props) => {

  return (
    <Menu stackable fluid widths={3}>
        <Menu.Item style={{color: "grey"}} as={Link} to={`/notes`} header name="FLATNOTE"/>

        <Menu.Item as={Link} to={`/notes/new`} name="New Note" />

        <Menu.Item onClick={props.logoutUser} as={Link} to={`/login`} name="Signout" />
    </Menu>
  );
}

export default connect(null, { logoutUser }) (Nav);
