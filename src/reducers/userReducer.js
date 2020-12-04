const userReducer = (state = null, action) => {
  switch(action.type) {

    case 'LOGIN_SUCCESS':
      return action.user.username

    default:
      return state

  }
}


export default userReducer