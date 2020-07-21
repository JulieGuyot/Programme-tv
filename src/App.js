import React from "react";
import "./App.css";
import Programmes from "./components/Programmes";
import data from "./assets/data.json";
import LogoM6 from "./assets/M6_2009.svg.png";

function App() {
  return (
    <div className="container">
      <img className="logo" alt="logo M6" src={LogoM6} />
      <Programmes data={data} />
    </div>
  );
}

export default App;
