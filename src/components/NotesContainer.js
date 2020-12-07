import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const NotesContainer = (props) => {

  const [notes, setNotes] = useState([])
 
  useEffect(() => {
   if (props.notes.loading === false) {
     setNotes(props.notes.notes) 
   }
  },[props.notes])

  return (
    <div>
      <h1 className="notes-header">{ props.notes.loading ? null  : `${props.user.username}'s Notes` }</h1>
      <Card.Group className="notes-container">
        { props.notes.loading ? null : notes.map(note => {
          return <Note {...note} key={note.id} />
        }) 
        }
      </Card.Group>
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


