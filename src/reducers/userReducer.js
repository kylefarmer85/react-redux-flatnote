const userReducer = (state = null, action) => {
  switch(action.type) {

    case 'LOGIN_SUCCESS':
      return action.data.user

    case 'LOGOUT_USER':
      return null
      
    default:
      return state

  }
}


export default userReducer