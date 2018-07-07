import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LandingPage from '../Layouts/LandingPage';
import Contact from '../Layouts/Contact';
import AboutMe from '../Layouts/AboutMe';
import Resume from '../Layouts/Resume';
import Project from '../Layouts/Projects';



class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Project" component={Project}/>
        <Route path="/Resume" component={Resume}/>
      </Switch>
    );
  }
}

export default Main;