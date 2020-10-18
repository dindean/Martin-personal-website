import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage'
import About from './Components/About'
import Experience from './Components/Experience'
import ProjectsList from './Components/ProjectsList'
import Project from './Components/Project'
import Footer from './Components/Footer'

const App = () => {
  return (
  <div>
    <Switch>
      <Route path="/projects/:projectId" component={Project} />
      <Route exact path="/about" component={About} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/projects" component={ProjectsList} />
      {/* <Route exact path="/" component={Fitness} /> */}
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </div>
  )
}

export default App