import React from 'react';
import { useHistory } from 'react-router'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import blue from '../images/blue.png'
import orange from '../images/orange.jpeg'
import sticky from '../images/sticky.png'
import pink from '../images/pink.png'



const randomNoteColor = () => {
  const noteImages = [blue, orange, sticky, pink]
  return noteImages[Math.floor(Math.random() * noteImages.length)]
}


const Note = (props) => {
  const {id, title, content} = props
  const history = useHistory()

  return (

      <div className="color-note" style={{backgroundImage:`url(${randomNoteColor()})`}} >
        <div className="inner-note">
          <h3>{title}</h3>
          <p>{content}</p>
          <Button onClick={() => history.push(`/notes/${id}`) }>View</Button>
          <Button primary as={Link} to={`/notes/${id}/edit`}>Edit</Button>
        </div>
    </div>
   

  );
}

export default Note;
