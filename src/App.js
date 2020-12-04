import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import NotesContainer from'./components/NotesContainer'
import Login from './components/Login'
import NoteShow from './components/NoteShow'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* include new note and sign out link in nav */}
        {/* <NotesContainer /> */}
        <Switch>

          <Route exact path ='/signout' />
          <Route exact path ='/notes' component={NotesContainer} />
          <Route exact path ='/notes/new' component={NewNote}/>
          <Route exact path ='/notes/:id'component={NoteShow} />
          <Route exact path ='/notes/:id/edit' component={EditNote} />
          <Route path ='*' component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
