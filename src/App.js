import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <main>
          <CurrentWeather className="current-city" defaultCity="New York" />
        </main>
        <footer>
          <p>
            This project was coded by
            <a
              href="https://github.com/cailyncon"
              target="_blank"
              rel="noreferrer"
            >
              Cailyn Connelly
            </a>
            and is
            <a
              href="https://github.com/cailyncon/connelly-weather"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>
            and
            <a
              href="https://connelly-weather.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
