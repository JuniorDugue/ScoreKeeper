import React from "react";
import ReactDOM from "react-dom";
import ScoreKeeper from "./components/ScoreKeeper/ScoreKeeper";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ScoreKeeper />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
