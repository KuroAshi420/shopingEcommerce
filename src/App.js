import React from "react";
import "./App.css";
import Card from "./components/card";
import Panier from './components/panier'
import Nav from "./components/nav";
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path="/panier" component={Panier} />
      <Route exact path="/" component={Card} />
    </div>
  );
}

export default App;
