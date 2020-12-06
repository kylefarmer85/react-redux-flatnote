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

export function fetchUser(user) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user
      })
    }

    fetch("http://localhost:3000/api/v1/users", reqObj)
    .then(resp => resp.json())
    .then(data => dispatch({ type: "LOGIN_USER", data}))
  }
}