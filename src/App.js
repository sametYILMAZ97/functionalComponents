import React from "react";
import "./App.css";
import Header from "./Header.js";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";

function App() {
  return (
    <div id="app">
      <Header />
      <Comp4 />
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

export default App;
