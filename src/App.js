import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        
        <footer>
          <a
            href="https://github.com/Nicole9410/react-weather-search-engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source coded by{" "}
          </a>{" "}
          Nicole de Wee
        </footer>
      </div>
    </div>
  );
}