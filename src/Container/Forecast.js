import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"
import _ from "lodash"
import styled from "styled-components"

class ForecastList extends Component {
  getTime = timestamp =>
    moment(timestamp * 1000)
      .utc()
      .format("HH:mm")

  render() {
    const forecast = this.props.forecast[0]
    if (!forecast) return null

    return (
      <Wrapper>
        {forecast.list.map(weather => (
          <Weather key={`forecast-${weather.dt}`}>
            <img
              src={`http://openweathermap.org/img/w/${
                weather.weather[0].icon
              }.png`}
            />
            {this.getTime(weather.dt)}
            <span>{Math.round(weather.main.temp)}°</span>
          </Weather>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`

const Weather = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  flex-direction: column;
`

function mapStateToProps(state) {
  return { forecast: state.forecast }
}

export default connect(mapStateToProps)(ForecastList)
