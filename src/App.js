import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import StarWars from './components/starwars';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/resume" render={() => <Resume />} />
            <Route path="/contact" render={() => <StarWars />} />
          </Switch>
      </Router >
    </div>
  );
}

export default App;
