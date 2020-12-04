import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'


class NoteShow extends Component {
  constructor(props){
    super()
    this.state = {
      id: props.match.params.id,
      note: {}
    }
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/notes/${this.state.id}`)
    .then(resp => resp.json())
    .then(showNote => {
      this.setState({
        note: showNote
      })
    })
  }
  
  
  handleDelete = (id) => {
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(deletedNote => {
      this.props.deleteNote(id)
      this.props.history.push('/notes')
      alert(`${deletedNote.title} was deleted.`)
      
    })
  }

  render() {
    const note = this.state.note
    return (
      <div>
        <Card>
          <Card.Header><h2>{note.title}</h2></Card.Header>
          <Card.Content>{note.content}</Card.Content>
          <Button onClick={() => this.handleDelete(note.id)}>Delete</Button>
          <Button as={Link} to={{pathname: `/notes/${note.id}/edit`, noteProps:{note: note}}}>Edit</Button>
          <Button as={Link} to={'/notes'}>Back to Notes</Button>
        </Card>
      </div>
    );
  }
}

export default connect(null, {deleteNote})(NoteShow)



