import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-4">
          <div className="d-flex align-items-center">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="weather-icon"
            />
          </div>
        </div>
        <div className="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="col-4">
        <ul>
          <li>Humidity:{props.data.humidity} %</li>
          <li>Wind: {(props.data.wind * 3.6).toFixed(2)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
