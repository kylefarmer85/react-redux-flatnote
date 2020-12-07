import React from 'react';
import { connect } from 'react-redux'
import Note from './Note'

const NotesContainer = (props) => {

  return (
    <div>
      <h1 className="notes-header">{ props.notes.loading ? "Loading..."  : `${props.user.username}'s notes` }</h1>

      <div className="notes-container">
        { props.notes.loading ? null : props.notes.notes.map(note => {
          return <Note {...note} key={note.id} />
        }) 
        }
      </div>
    </div>
  );
} 

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user.user
  }
}

export default connect(mapStateToProps, null) (NotesContainer);


