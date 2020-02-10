import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Project from './project';
import Resume from './resume';

const Main = () =>(

    <Switch> 
<Route exact path="/" component={LandingPage} />
<Route path="/about" component={About} />
<Route path="/resume" component={Resume} />
<Route path="/project" component={Project} />
<Route path="/contact" component={Contact} />

</Switch>
)
export default Main;