import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';

import './App.css';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
