import React from 'react';
import { connect } from 'react-redux'
import Note from './Note'

const NotesContainer = (props) => {

  const renderNotes = () => {
    return props.notes.map(note => {
      return <Note {...note} key={note.id} />
    })
  }

  return (
    <div>
      { renderNotes() }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, null) (NotesContainer);
