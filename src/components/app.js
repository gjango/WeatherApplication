import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchWeather } from "../actions/index"
import WeatherList from "../Container/WeatherList"
import { fetchForecast } from "../actions/forecast"
import ForecastList from "../Container/ForecastList"
import { fetchDaily } from "../actions/daily"
import DailyList from "../Container/DailyList"
import { NavLink } from "react-router-dom"

export class App extends Component {
  state = { city: "Choose a city to view the weather" }

  handleClick = event => this.setState({ city: event.target.textContent })

  componentDidUpdate() {
    this.props.fetchWeather(this.state.city)
    this.props.fetchForecast(this.state.city)
    this.props.fetchDaily(this.state.city)
  }

  render() {
    const cities = [
      "Tbilisi",
      "Zugdidi",
      "Kutaisi",
      "Batumi",
      "Gori",
      "Poti",
      "Mtskheta",
      "Dusheti",
      "Kobuleti"
    ]

    return (
      <div>
        <div className="navbar" id="navbar">
          <nav className="navbar navbar-lg navbar-light bg-blue">
            <a className="navbar-brand" href="#">
              <img
                src="/src/icons/rainbow.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=""
              />
              Weather
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {cities.map(city => (
                  <a
                    className="nav-item nav-link"
                    href="#"
                    onClick={this.handleClick}
                    key={_.random(0, 999999)}
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div className="showdata">
            <WeatherList cityName={this.state.city} />
            {/* <ForecastList cityName = {this.state.city} /> */}
            <ForecastList />
            <DailyList />
          </div>

          <NavLink to="/weathermap"> Map </NavLink>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWeather, fetchForecast, fetchDaily },
    dispatch
  )
}

export default connect(
  null,
  mapDispatchToProps
)(App)
