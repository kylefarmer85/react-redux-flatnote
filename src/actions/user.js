export const getCurrentUser = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}
