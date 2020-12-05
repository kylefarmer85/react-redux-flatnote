import React from 'react';
import { useHistory } from 'react-router'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Note = (props) => {
  const {id, title, content} = props
  // useHistory just to try it out 
  const history = useHistory()

  return (

    <Card>
      <Card.Content header={title} />
      <Card.Content description={content} />
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={() => history.push(`/notes/${id}`) }>View</Button>
          <Button primary as={Link} to={`/notes/${id}/edit`}>Edit</Button>
        </div>
      </Card.Content>
    </Card>

  );
}

export default Note;
