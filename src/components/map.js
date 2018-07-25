import React, { Component } from "react"
import { fetchMultipleWeather } from "../actions/index"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { cities } from "../utils/consts"

const style = {
  width: "80%",
  height: "80%",
  margin: "5%"
}

export class MapContainer extends Component {
  componentDidMount() {
    this.props.fetchMultipleWeather(cities.map(x => x.id))
  }

  getCityWeather = name => this.props.weather[0].filter(x => x.name === name)[0]

  render() {
    if (this.props.weather.length === 0) return null

    return (
      <Wrapper>
        <Map
          google={this.props.google}
          zoom={8}
          style={style}
          initialCenter={{
            lat: 42.090952,
            lng: 43.59839
          }}
        >
          {cities.map(x => x.name).map(city => (
            <Marker
              key={`map-city-${city}`}
              onClick={this.onMarkerClick}
              name={city}
              icon={{
                url: `http://openweathermap.org/img/w/${
                  this.getCityWeather(city).weather[0].icon
                }.png`,
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(64, 64)
              }}
              position={{
                lat: this.getCityWeather(city).coord.lat,
                lng: this.getCityWeather(city).coord.lon
              }}
            />
          ))}
        </Map>
        <ButtonContainer>
          <a href="/">
            <button type="button" className="btn btn-outline-info  float-right">
              BACK
            </button>
          </a>
        </ButtonContainer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  position: relative;
`

function mapStateToProps(state) {
  return { weather: state.multipleWeather }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMultipleWeather }, dispatch)
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0XNO0tPBzLZtOn4fKDWPeJ3q_2BoeQbo"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapContainer)
)
