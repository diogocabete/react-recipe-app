import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Error from './Error';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipe/:recipe" component={Recipe} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
