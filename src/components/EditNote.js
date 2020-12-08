import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateNote } from '../actions/notes'
import { Link } from 'react-router-dom'


class EditNote extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
      title: '',
      content: ''
    }
  }

  componentDidMount(){
    if (this.props.notes) {
    const noteToEdit = this.props.notes.find(n => n.id === parseInt(this.state.id))
      this.setState({
        title: noteToEdit.title,
        content: noteToEdit.content
      })
    } else {

      fetch(`http://localhost:3000/api/v1/notes/${this.state.id}`)
      .then(resp => resp.json())
      .then(noteToEdit => {
        this.setState({
            title: noteToEdit.title,
            content: noteToEdit.content
        })
      })
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
    <Form className='edit-note-form' onSubmit={this.handleSubmit}>
      <h1>Edit Note</h1>
      <Form.Field label="Note Title" control="input" name="title" value={this.state.title} onChange={this.handleChange}/>
      <Form.Field label='Note Content' control="textarea" name="content" value={this.state.content} onChange={this.handleChange}/>
      <Button primary type='submit'>Update</Button>
      <Button as={Link} to={`/notes`}>Back to Notes</Button>
    </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notes: state.notes
  }
}

export default connect(mapStateToProps, {updateNote})(EditNote);