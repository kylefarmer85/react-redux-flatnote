export const loginSuccess = data => {
  return {
    type: 'LOGIN_SUCCESS',
    data
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}