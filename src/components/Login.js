import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/user'

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
    .then(user => {
      this.props.getCurrentUser(user)
    })

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
         <input type='submit' />
        </form>
      </div>
    );
  }
}



export default connect(null, {getCurrentUser}) (Login);
