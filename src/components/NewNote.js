import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

const noteImages = ['../images/blue.png', '../images/orange.jpg', '../images/green.jpg', '../images/pink.png', '../images/yellow.jpg']

const randomNoteColor = noteImages[Math.floor(Math.random() * noteImages.length)]

class NewNote extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      content: ''
    }
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
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.user.id,
      })
    }

    fetch("http://localhost:3000/api/v1/notes", reqObj)
    .then(resp => resp.json())
    .then(newNote => {
      this.props.addNote(newNote)
      this.props.history.push(`/notes/${newNote.id}`)
    })
  }


  render() {
    return (
    <Form className='new-note-form' onSubmit={this.handleSubmit}>
      <Header as='h1'>New Note</Header>
      <Form.Field label="Note Title" control="input" name="title" value={this.state.title} onChange={this.handleChange}/>
      <Form.Field label='Note Content' control="textarea" name="content" value={this.state.content} onChange={this.handleChange}/>
      <Button primary type='submit'>Submit</Button>
    </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, {addNote})(NewNote);
