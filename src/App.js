import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/Nicole9410/react-weather-search-engine" target="_blank" rel="noreferrer"> Open-source code </a>
          by Nicole de Wee.
        </footer>
      </div>
    </div>
  );
}
