import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="mt-4">
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {(props.data.wind * 3.6).toFixed(2)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
