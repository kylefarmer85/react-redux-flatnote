import React, { Component }  from 'react';
import { connect } from 'react-redux'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const NotesContainer = (props) => {

  const renderNotes = () => {
    return props.notes.map(note => {
      return <Note {...note} key={note.id} />
    })
  }

    return (
      <Card.Group itemsPerRow={2}>
        { renderNotes() }
      </Card.Group>
    );
  }


const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, null) (NotesContainer);


