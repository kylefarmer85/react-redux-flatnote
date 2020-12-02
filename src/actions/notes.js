export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note
  }
}

export const updateNote = note => {
  return {
    type: 'UPDATE_NOTE',
    id
  }
}

export const deleteNote = note => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}