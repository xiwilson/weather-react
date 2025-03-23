import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Monday 8:00",
      description: response.data.weather[0].description,
      iconUrl:
        "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png",
      wind: response.data.main.wind.speed,
      name: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-search w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="mt-4">
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-5">
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="img-fluid"
            />
          </div>
          <div className="col-4">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit"> °C</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...":
  }
}
