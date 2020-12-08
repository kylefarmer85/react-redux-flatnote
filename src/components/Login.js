import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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

  render() {
    return (
    <div className="paperclip-note">
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <h1 id="flatnote-header">Welcome to FLATNOTE</h1>
        <Form.Field label="User Login" placeholder="Username" control="input" name="username" value={this.state.username} onChange={this.handleChange} />
        <Form.Field placeholder="Password" type="password" control="input" name="password" value={this.state.password} onChange={this.handleChange} />
        <Button primary type='submit'>Login</Button>
        <Button as={Link} to={'/signup'}>or Signup</Button>
      </Form> 
    </div>    
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

function mapDispatchToProps(dispatch){
  return { fetchUser: (user, password) => dispatch(fetchUser(user, password)) }
}


export default connect(null, mapDispatchToProps) (Login);
