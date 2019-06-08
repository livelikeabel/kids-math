import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bord from "./components/Bord";
import DragNumbers from "./components/DragNumbers";

function App() {
  return (
    <div className="App">
      <h2>수배열 1단계</h2>
      <Bord />
      <DragNumbers />
    </div>
  );
}

export default App;
