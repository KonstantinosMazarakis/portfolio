import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/Template.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Certifications from './Certifications';
import Resume from './Resume';
import Projects from './Projects'

    let Template = () =>{
        return<div className="template">
         <Switch>
        <Route exact path="/">
          <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/skills">
        <Skills></Skills>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/certifications">
        <Certifications></Certifications>
      </Route>
      <Route path="/resume">
        <Resume></Resume>
      </Route>
      <Route path="/projects">
        <Projects></Projects>
      </Route>
      </Switch>
        </div>
    }

export default Template