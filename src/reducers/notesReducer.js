const notesReducer = (state = { notes: [], loading: true }, action) => {

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

    case 'ADD_NOTE':
      return {
        ...state, 
        notes: [...state.notes, action.note],
        loading: false
      }

    case 'UPDATE_NOTE':
      updatedNotes = state.notes.map(n => n.id === action.note.id ? action.note : n)
      return {
        ...state,
        notes: updatedNotes,
        loading: false
      }  
    
    case 'DELETE_NOTE':
      updatedNotes = state.notes.filter(note => note.id !== action.id)
      return {
        ...state,
        notes: updatedNotes,
        loading: false
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        notes: [],
        loading: true
      }  

    default:
      return state
  }
}

export default notesReducer