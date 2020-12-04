import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Button } from 'semantic-ui-react'


const NoteShow = (props) => {
  const id = props.match.params.id
  
  const [note, setNote] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/notes/${id}`)
    .then(resp => resp.json())
    .then(showNote => {
      setNote(showNote)
      console.log(showNote)
    })
  },[])
  
  const handleDelete = (id) => {

  }


  return (
    <Card style={{textAlign: "center"}}>
      <h1>NoteShow</h1>
      <Card.Header>{note.title}</Card.Header>
      <Card.Content>{note.content}</Card.Content>
      <Button onClick={handleDelete}>Delete</Button>
      <Button>Edit</Button>
      <Button as={Link} to='/notes'>Back to Notes</Button>
    </Card>
  );
}

export default NoteShow
