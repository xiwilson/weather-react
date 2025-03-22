import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This app was coded by{" "}
          <a
            href="https://github.com/xiwilson"
            target="_blank"
            rel="noreferrer"
          >
            Linzi Wilson,{" "}
          </a>
          it is open-sourced on{" "}
          <a
            href="https://github.com/xiwilson?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub{" "}
          </a>
          and is{" "}
          <a
            href="https://xiweather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
      <script src="src/app.js"></script>
    </div>
  );
}
