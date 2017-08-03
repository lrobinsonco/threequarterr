import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
    <Router>
    <div>
    <Route path="/" component={App} />
    <Route exact path="/" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />

    </div>
    </Router>
   ,

  document.getElementById('root'));
