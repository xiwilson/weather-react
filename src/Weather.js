import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-search" />
          </div>
        </div>
      </form>
      <h1>Los Angeles</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png"
            alt="mostly sunny"
          />
          19°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity:85%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
