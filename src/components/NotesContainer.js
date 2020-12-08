import React from 'react';
import { connect } from 'react-redux'
import Note from './Note'



const NotesContainer = (props) => {

  return (
    <div>
      <h2 className="notes-header">{ props.notes.loading ? "Loading..."  : `${props.user.username}'s notes` }</h2>

      <div className="notes-container">
        { props.notes.loading ? 
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui loader">
              </div>
            </div>
          </div> 
        : 
        props.notes.notes.length > 0 ?
        props.notes.notes.map(note => {
          return <Note {...note} key={note.id} />
        }) : "You have 0 notes."
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