export const findOrCreateUser = user => {
  return {
    type: 'FIND_OR_CREATE_USER',
    user
  }
}
