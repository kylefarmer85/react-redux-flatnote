const userReducer = (state = { user: null, loading: false}, action) => {
  switch(action.type) {

    case 'START_ADDING_USER_REQUEST':
      return {
        user: state.user,
        loading: true
      }

    case 'LOGIN_USER':
      return {
        user: action.data.user,
        loading: false
      }  

    // case 'LOGIN_SUCCESS':
    //   return action.data.user

    case 'LOGOUT_USER':
      return null
      
    default:
      return state

  }
}


export default userReducer