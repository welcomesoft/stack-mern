import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation />

      <Route path="/" component={NotesList} exact />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />

    </Router>
  );
}

export default App;
