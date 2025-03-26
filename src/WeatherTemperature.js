import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsuis") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsuis)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
