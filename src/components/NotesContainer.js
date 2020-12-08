import React from 'react';
import { connect } from 'react-redux'
import Note from './Note'
import { Dimmer, Loader } from 'semantic-ui-react'

const NotesContainer = (props) => {

  return (
    <div>
      <h2 className="notes-header">{ props.loading ? null  : `${props.user.username}'s notes` }</h2>
      <div className="notes-container">
        { props.loading ? 
          <Dimmer active inverted>
            <Loader size='big' inverted content='Loading' />
          </Dimmer>
        : 
        props.notes.length > 0 ?
        props.notes.map(note => {
          return <Note {...note} key={note.id} />
        }) 
        : "You have 0 notes."
        }
      </div>
    </div>
  );
} 

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user,
    loading: state.loading
  }
}

export default connect(mapStateToProps, null) (NotesContainer);