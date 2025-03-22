import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="🔍 Enter a city..."
              required
              id="search-form-input"
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city" id="city">
                London
              </h1>
              <p className="weather-app-details">
                <span id="time">Monday 13:56,</span>
                <span id="description">clear sky</span>
                <br />
                Humidity: <strong id="humidity">49%</strong>, Wind:
                <strong id="wind-speed">3.09km/h</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div id="icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                  className="weather-app-icon"
                  alt="weather icon"
                />
              </div>
              <div className="weather-app-temperature-value" id="temperature">
                19
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </main>
        <footer>
          Coded by
          <a
            href="https://github.com/xiwilson"
            target="_blank"
            rel="noreferrer"
          >
            Linzi Wilson,
          </a>
          is open-sourced on
          <a
            href="https://github.com/xiwilson?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and is
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
