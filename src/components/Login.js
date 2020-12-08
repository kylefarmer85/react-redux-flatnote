import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, signupUser } from '../actions/user'
import { Form, Button } from 'semantic-ui-react'


class Login extends Component {
    state = {
      username: '',
      password: ''  
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        username: prevState.username.split(' ').join('').toLowerCase
      }
    })
    this.props.fetchUser(this.state.username, this.state.password)

    this.props.history.push('/notes')
    this.setState({
      username: '',
      password: '',
    })
  }

  handleSignup = () => {
    this.setState(prevState => {
      return {
        username: prevState.username.split(' ').join('').toLowerCase
      }
    })
    this.props.signupUser(this.state.username, this.state.password)

    this.props.history.push('/notes')
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    return (
    <div className="paperclip-note">
      <Form className="login-form" onSubmit={this.handleSubmit}>

        <h1 id="flatnote-header">Welcome to FLATNOTE</h1>

        <Form.Field label="User Login / Signup" placeholder="Username" control="input" name="username" value={this.state.username} onChange={this.handleChange} />

        <Form.Field placeholder="Password" type="password" control="input" name="password" value={this.state.password} onChange={this.handleChange} />

        <Button disabled={!this.state.username || !this.state.password} primary type='submit'>Login</Button>
        <Button disabled={!this.state.username || !this.state.password} onClick={this.handleSignup}>Signup</Button>

      </Form> 
    </div>    
    );
  }
}


export default connect(null, {fetchUser, signupUser}) (Login);
