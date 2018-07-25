import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchWeather } from "../actions/index"
import WeatherList from "../Container/WeatherList"
import { fetchForecast } from "../actions/forecast"
import Forecast from "../Container/Forecast"
import { fetchDaily } from "../actions/daily"
import DailyList from "../Container/DailyList"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export class App extends Component {
  // state = { city: "Choose a city to view the weather" }
  state = { city: "Tbilisi" }

  handleClick = e => this.setState({ city: e.target.textContent })

  componentDidUpdate() {
    this.props.fetchWeather(this.state.city)
    this.props.fetchForecast(this.state.city)
    this.props.fetchDaily(this.state.city)
  }

  // remove later
  componentDidMount() {
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
                    key={`city-${city}`}
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <NavLink to="/weathermap"> Map </NavLink>
        </div>
        <WeatherContainer>
          <WeatherList cityName={this.state.city} />
          {/* <ForecastList cityName = {this.state.city} /> */}
          <Forecast />
          <DailyList />
        </WeatherContainer>
      </div>
    )
  }
}

const WeatherContainer = styled.div`
  width: 100%;
`

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
