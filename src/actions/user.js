export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const currentUser = (data) => {
  return {
    type: 'CURRENT_USER',
    data
  }
}

export function fetchUser(user, password) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: password
      })
    }

    fetch("http://localhost:3000/api/v1/auth", reqObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: "LOGIN_USER", data})
      localStorage.setItem('my_app_token', data.token)
      })
  }
}


export function signupUser(user, password) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: password
      })
    }

    fetch("http://localhost:3000/api/v1/users", reqObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: "LOGIN_USER", data})
      localStorage.setItem('my_app_token', data.token)
      })
  }
}