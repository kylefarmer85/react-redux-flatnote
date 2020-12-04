export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note
  }
}

export const updateNote = id => {
  return {
    type: 'UPDATE_NOTE',
    id
  }
}

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}