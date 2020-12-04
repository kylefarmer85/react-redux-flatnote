export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note
  }
}

export const updateNote = note => {
  return {
    type: 'UPDATE_NOTE',
    note
  }
}

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}