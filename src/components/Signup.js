import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Signup extends Component {
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
        <h1 id="flatnote-header">FLATNOTE Signup</h1>
        <Form.Field label="Enter a Username and Password" placeholder="Username" control="input" name="username" value={this.state.username} onChange={this.handleChange} />
        <Form.Field placeholder="Password" control="input" name="password" value={this.state.password} onChange={this.handleChange} />
        <Button primary type='submit'>Signup</Button>
        <Button as={Link} to={'/login'}>Back</Button>
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
  return { signupUser: (user, password) => dispatch(signupUser(user, password)) }
}


export default connect(null, mapDispatchToProps) (Signup);