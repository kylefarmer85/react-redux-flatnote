import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './components/Nav'
import NotesContainer from'./components/NotesContainer'
import Login from './components/Login'
import NoteShow from './components/NoteShow'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import { connect } from 'react-redux'
import { currentUser } from './actions/user'


class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('my_app_token')
    
    if (!token) {
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.currentUser(data)
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path ='/notes' component={NotesContainer} />
            <Route exact path ='/notes/new' component={NewNote}/>
            <Route exact path ='/notes/:id'component={NoteShow} />
            <Route exact path ='/notes/:id/edit' component={EditNote} />
            <Route path ='/' component={Login} />
          </Switch> 
      </div>
    );
  }
}

export default connect(null,{ currentUser })(withRouter(App));
