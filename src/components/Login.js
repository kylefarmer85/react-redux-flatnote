import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/user'
import { Form, Button } from 'semantic-ui-react'
// import ReactAnimations from './ReactAnimations'


class Login extends Component {
    state = {
      username: ''  
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username.split(' ').join('').toLowerCase()
      })
    }

    fetch("http://localhost:3000/api/v1/users", reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.loginSuccess(data)
      this.props.history.push('/notes')
    })

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <h1 id="flatnote-header">Welcome to FLATNOTE</h1>
        <Form.Field label="User Login" control="input" name="username" value={this.state.username} onChange={this.handleChange} />
        <Button primary type='submit'>Login</Button>
      </Form> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { loginSuccess }) (Login);
