const notesReducer = (state = [], action) => {
  switch(action.type) {

    case 'LOGIN_SUCCESS':
    return action.user.notes
    
    case 'SHOW_NOTE':
      
    default:
      return state
  }
}

export default notesReducer