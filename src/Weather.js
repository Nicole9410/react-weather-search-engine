import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Search City" className="form-control" autoFocus="on" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    <h1> Cape Town </h1>
      <ul>
        <li>
          Wednesday, 17:00
        </li>
        <li>
          Mostly Cloudy
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather icon" className="float-left" />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation:
            </li>
            <li>
              Humidity:
            </li>
            <li>
              Wind:
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}