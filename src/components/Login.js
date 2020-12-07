import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user'
import { Form, Button } from 'semantic-ui-react'


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
    this.setState(prevState => {
      return {
        username: prevState.username.split(' ').join('').toLowerCase
      }
    })
    this.props.fetchUser(this.state.username)

    this.props.history.push('/notes')
    this.setState({
      username: ''
    })
  }

  render() {
    return (
    <div className="paperclip-note">
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <h1 id="flatnote-header">Welcome to FLATNOTE</h1>
        <Form.Field label="Enter Username to Login or Signup" placeholder="Username" control="input" name="username" value={this.state.username} onChange={this.handleChange} />
        <Button primary type='submit'>Submit</Button>
      </Form> 
    </div>    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return { fetchUser: (user) => dispatch(fetchUser(user)) }
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);
