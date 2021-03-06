import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import Header from './Components/Header.jsx';
import About from './Components/About'
import ProjectsList from './Components/ProjectsList'
import Project from './Components/Project'
import Training from './Components/Training'
import Footer from './Components/Footer'

const App = () => {
  return (
  <div>
    <Header />
    <Switch>
      <Route path="/projects/:projectId" component={Project} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={ProjectsList} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </div>
  )
}

export default App