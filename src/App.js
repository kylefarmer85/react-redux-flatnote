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


class App extends Component {

  componentDidMount(){
    
   if (this.props.user === null) {
     console.log(this.props.user)
    this.props.history.push("/login")
   } else {
     console.log(this.props.user)
     return
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
            <Route path ='/login' component={Login} />
          </Switch> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, null)(withRouter(App));
