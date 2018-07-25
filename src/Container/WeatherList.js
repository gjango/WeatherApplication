import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

class WeatherList extends Component {
  render() {
    const mainWeather = this.props.weather[0]
    if (!mainWeather) return null
    // console.log("weather: ", mainWeather)
    const weather = mainWeather.weather[0]

    return (
      <Container>
        <h1>Tbilisi</h1>
        <h2>{mainWeather.main.temp}°</h2>
        <Icon src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
        <h2>
          {weather.main}, {weather.description}
        </h2>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  height: 120px;
`

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)
