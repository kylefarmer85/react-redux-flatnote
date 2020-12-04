const notesReducer = (state = [], action) => {
  let updatedNotes;
  switch(action.type) {

    case 'LOGIN_SUCCESS':
    return action.user.notes
    
    case 'DELETE_NOTE':
      console.log(action)
      updatedNotes = state.filter(note => note.id !== action.id)
      return updatedNotes

    default:
      return state
  }
}

export default notesReducer