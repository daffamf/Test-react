import React, { Component } from 'react'
import HomePage from './Components/HomePage/index'
import Country from './Components/Country/index'
import {
  BrowserRouter ,
  Route,
  
} from "react-router-dom";



export default class App extends Component {
  
  render() {
    return (
      <div>
         <BrowserRouter> 
        <Route path="/" exact > <HomePage /></Route>
        <Route path="/coutry" exact > <Country /></Route>
        </BrowserRouter>
      </div>
    )
  }
}


