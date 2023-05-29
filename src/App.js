import React from 'react'
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import { About, Contact, Home, Service,MyNav,Help,Footer,Togglebutton } from './ReactMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () =>{
  return (
    <>
    <Router>
    <MyNav />
    <div className="parent">
    <Switch>
    <Route exact path='/'><Home /></Route>
    <Route  exact path='/Service'><Service /></Route>
    <Route exact path='/About'><About /></Route>
    <Route exact path='/Contact' ><Contact /></Route>
    <Route exact path='/Help' ><Help /></Route>
    </Switch>
    </div>
    </Router>
    <Footer/>
    </>
  )
}

export default App;