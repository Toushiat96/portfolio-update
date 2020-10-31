import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Blogs from './Components/Blogs/Blogs';
import Skill from './Components/Skill/Skill';


function App() {
  return (
    <Router>
    <Switch>
    <Route exact path ="/">
    <Home></Home>
    </Route>
    <Route exact path ="/about">
    <About></About>
    </Route>
    <Route exact path ="/contact">
    <Contact></Contact>
    </Route>
  <Route path="/blogs">
  <Blogs></Blogs>
  </Route>
  
  <Route path="/skill">
  
  <Skill></Skill>
  </Route>
  
    <Route exact path ="/project">
    <Project></Project>
    </Route>
    </Switch>
    
    </Router>
  );
}

export default App;
