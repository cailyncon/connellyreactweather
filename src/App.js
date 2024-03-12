import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <main>
          <CurrentWeather className="current-city" defaultCity="Seattle" />
        </main>
        <footer>
          <p>
            This project was coded by&nbsp;
            <a
              href="https://github.com/cailyncon"
              target="_blank"
              rel="noreferrer"
            >
              Cailyn Connelly&nbsp;
            </a>
            and is&nbsp;
            <a
              href="https://github.com/cailyncon/connelly-weather"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub&nbsp;
            </a>
            and&nbsp;
            <a
              href="https://connelly-weather.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
