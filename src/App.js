import React from "react";
import "./App.css";
import Card from "./components/card";
import Panier from './components/panier'

function App() {
  return (
    <div className="App">
      <Card />
      <Panier/>
    </div>
  );
}

export default App;
