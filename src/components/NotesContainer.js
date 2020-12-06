import React from 'react';
import { connect } from 'react-redux'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const NotesContainer = (props) => {

  const renderNotes = () => {
    if (props.notes.length > 0) {
      return props.notes.map(note => {
        return <Note {...note} key={note.id} />
      })
    } else {
      return alert("You have no notes. Click New Note to create one!")
    }
  }

  return (
    <div>
      <h1 className="notes-header">{props.user.username}'s Notes</h1>
      <Card.Group className="notes-container">
        { renderNotes() }
      </Card.Group>
    </div>
  );
} 


const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, null) (NotesContainer);


