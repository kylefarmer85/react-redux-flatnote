import React from 'react';
import { useHistory } from 'react-router'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Note = (props) => {
  const {id, title, content} = props
  const history = useHistory()

  return (
    <Card>
      <Card.Header><h3>{title}</h3></Card.Header>
      <Card.Content>{content}</Card.Content>
      <Button onClick={() => history.push(`/notes/${id}`) }>View</Button>
      <Button as={Link} to={{pathname: `/notes/${id}/edit`, noteProps:{note: props}}}>Edit</Button>
    </Card>
  );
}

export default Note;
