import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'


class NoteShow extends Component {
  constructor(props){
    super(props)  
    this.state = {
      id: this.props.match.params.id,
      note: {}
    }
  }

  componentDidMount(){
    this.props.notes ? 
    
    this.setState({
      note: this.props.notes.find(n => n.id === parseInt(this.state.id))
    })
    :
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
    
      this.props.deleteNote(deletedNote.id)
      this.props.history.push('/notes')
      alert(`${deletedNote.title} was deleted.`)
    })
  }

  render() {
    const note = this.state.note
    return (
    <div className='note-image'>
      <div className="note-show">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <div className='note-buttons'>
          <Button primary as={Link} to={`/notes/${note.id}/edit`}>Edit</Button>
          <Button secondary onClick={() => this.handleDelete(note.id)}>Delete</Button>
          <Button as={Link} to={'/notes'}>All Notes</Button>
        </div>
      </div>
    </div>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, {deleteNote})(NoteShow)



