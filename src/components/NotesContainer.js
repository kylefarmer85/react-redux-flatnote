import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import Note from './Note'
import { Card } from 'semantic-ui-react'

const NotesContainer = (props) => {

  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
 
  useEffect(() => {
   console.log(props,"pre");
   if (props.notes.loading === false) {
     setNotes(props.notes.notes) 
     setLoading(false)
     
   }
  },[props.notes])

  // const renderNotes = () => {
  //   if (props.notes.length > 0) {
  //     return props.notes.map(note => {
  //       return <Note {...note} key={note.id} />
  //     })
  //   }
  // }

    return (
      <div>
        <h1 className="notes-header">{ loading ? null  : `${props.user.username}'s Notes` }</h1>
        <Card.Group className="notes-container">
          { loading ? null : notes.map(note => {
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


