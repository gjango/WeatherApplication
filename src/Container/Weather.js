import React, { Component } from "react"
import { connect } from "react-redux"
import Forecast from "../Container/Forecast"
import moment from "moment"
import styled from "styled-components"
import Daily from "./DailyList"
import CircularProgressbar from 'react-circular-progressbar';

class WeatherList extends Component {
  getTime = timestamp => moment(timestamp * 1000).format("HH:mm")

  render() {
    const mainWeather = this.props.weather[0]
    if (!mainWeather) return null
    const weather = mainWeather.weather[0]
    console.log(mainWeather);

    return (
      <Container>
        <WeatherContainer>
          <h1>{mainWeather.name}</h1>
          <h2>{mainWeather.main.temp}°</h2>
          <Icon src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
          <h2>
            {weather.main}, {weather.description}
          </h2>
        </WeatherContainer>
        <Forecast />
        <Separator />
        <WindContainer>
          Wind
          
          <WindAnimation>
            <img src="/src/icons/windicons/wind-base.png" />
            <img id="rotate" src="/src/icons/windicons/wind-top1.png" />
            <img id="rotate1" src="/src/icons/windicons/wind-top2.png" />
          </WindAnimation>

          <WindDetails>
            direction: {mainWeather.wind.deg}°
            <br />
            speed: {mainWeather.wind.speed} km/h
          </WindDetails>
        </WindContainer>

        <Separator />

        <HumidityContainer>
          <div>
            Comfort LVL
          </div>
          <div>
            <CircularProgressbar percentage={mainWeather.main.humidity} text={`${mainWeather.main.humidity}%`} /> humidity
          </div>
          <div>Feels like</div>

        </HumidityContainer>

        <Separator />
        <DailyContainer>
          Sunrise/Sunset
          <DailyDetails>
            sunrise: {this.getTime(mainWeather.sys.sunrise)}
            <br />
            sunset: {this.getTime(mainWeather.sys.sunset)}
          </DailyDetails>
        </DailyContainer>
        <Separator />
        <Daily />
      </Container>
    )
  }
}

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Icon = styled.img`
  height: 120px;
`

const Separator = styled.div`
  border-top: 1px solid #b7b7b7;
  margin-top: 5px;
  margin-bottom: 15px;
`

const WindContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const HumidityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const WindAnimation = styled.div`
  position: relative;
  margin-left: 120px;
`

const WindDetails = styled.div`
  
`

const DailyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DailyDetails = styled.div`
  margin-right: 100px;
`

function mapStateToProps(state) {
  return { weather: state.weather, daily: state.daily }
}

export default connect(mapStateToProps)(WeatherList)
