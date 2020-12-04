import React from 'react';
import { useHistory } from 'react-router'
import { Card, Button } from 'semantic-ui-react'

const Note = (props) => {
  const {id, title, content} = props
  const history = useHistory()

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Content>{content}</Card.Content>
      <Button onClick={() => history.push(`/notes/${id}`) }>view</Button>
      <Button>edit</Button>
    </Card>
  );
}

export default Note;
