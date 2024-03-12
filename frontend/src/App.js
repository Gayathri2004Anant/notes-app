import Header from './components/Header';
import Notes from './pages/notesListPage';
import NotePage from './pages/notePage';
import CreatePage from './pages/createPage';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>   
    
    <div className="App">
      <Header />
      <Switch>
      <Route exact path = "/" >
          <Notes />
      </Route>
      <Route exact path = "/note/:id">
          <NotePage />
      </Route>
      <Route exact path = "/create">
          <CreatePage />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
