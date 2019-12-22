import React from 'react';

//import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import NavBar from  '../NavBar/NavBar'
import Home from '../Pages/Home/Home'
import Project from '../Pages/Project/Project'
import Footer from '../Footer/Footer'
import NotFoundPage  from '../Pages/NotFoundPage/NotFoundPage'


const Routes = () => ( 
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects/:id" component={Project} />
    <Route exact path="/project" component={Project} />
    <Route exact path="*" component={NotFoundPage} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <div className="fixed-top bg-secondary">
      <div className="container">
        <NavBar></NavBar>
      </div>
    </div>
    <Routes />
    <Footer /> 
  </BrowserRouter>
)

export default App