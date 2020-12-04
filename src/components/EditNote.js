import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateNote } from '../actions/notes'


class EditNote extends Component {
  constructor(props){
    super()
    const {note} = props.location.noteProps
    this.state = {
      title: note.title,
      content: note.content,
      id: note.id
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
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.user.id
      })
    }

    fetch(`http://localhost:3000/api/v1/notes/${this.state.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      this.props.updateNote(updatedNote)
      this.props.history.push(`/notes/${updatedNote.id}`)
    })
  }


  render() {
    return (
    <Form className='new-user-form' onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>Note Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
      </Form.Field>
      <Form.Field>
        <label>Note Content</label>
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange}></input>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {updateNote})(EditNote);