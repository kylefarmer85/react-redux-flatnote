const notesReducer = (state = { notes: [], loading: false }, action) => {

  let updatedNotes;

  switch(action.type) {
    case 'START_ADDING_USER_REQUEST':
      return {
        ...state,
        notes: [...state.notes],
        loading: true
      }

    case 'LOGIN_USER':
      return {
        ...state,
        notes: action.data.notes,
        loading: false
      }  


    // case 'LOGIN_SUCCESS':
    //   return action.data.notes

    case 'ADD_NOTE':
      return [...state, action.note]

    case 'UPDATE_NOTE':
      updatedNotes = state.map(n => n.id === action.note.id ? action.note : n)
      return updatedNotes   
    
    case 'DELETE_NOTE':
      updatedNotes = state.filter(note => note.id !== action.id)
      return updatedNotes

    case 'LOGOUT_USER':
      return []  

    default:
      return state
  }
}

export default notesReducer