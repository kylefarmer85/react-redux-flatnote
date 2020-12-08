const userReducer = (state = { user: null, loading: true}, action) => {
  switch(action.type) {

    case 'START_ADDING_USER_REQUEST':
      return {
        ...state,
        user: state.user,
        loading: true
      }

    case 'LOGIN_USER':
      return {
        ...state,
        user: action.data.user,
        loading: false
      }  

    case 'CURRENT_USER':
      return {
        ...state,
        user: action.data.user,
        loading: false
      }  

    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        loading: true
      }
      
    default:
      return state

  }
}


export default userReducer