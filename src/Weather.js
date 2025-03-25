import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("Handling Response Data:", response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      iconUrl:
        "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  function search() {
    const apiKey = "3f47deba7d7o337tb76d054056f8cbe1";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-search w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.name}</h1>
        <ul className="mt-4">
          <li>{formatDate(weatherData.date)}</li>
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
              <li>Wind: {(weatherData.wind * 3.6).toFixed(2)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
