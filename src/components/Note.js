import React from 'react';
import { useHistory } from 'react-router'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import blue from '../images/blue.png'
import orange from '../images/orange.jpeg'
import pink from '../images/pink.png'
import teal from '../images/teal.png'
import orange2 from '../images/orange2.jpeg'
import green from '../images/green.jpg'
import yellow from '../images/yellow.jpg'


const randomNoteColor = () => {
  const noteImages = [blue, green, yellow, orange, orange2, teal, pink]
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
        <div className="inner-buttons">
          <Button basic onClick={() => history.push(`/notes/${id}`) }>View</Button>
          <Button basic as={Link} to={`/notes/${id}/edit`}>Edit</Button>
        </div>
      </div>
    </div>
   

  );
}

export default Note;
