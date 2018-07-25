import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

const style = {
  width: "80%",
  height: "80%",
  margin: "5%"
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={style}
        initialCenter={{
          lat: 42.090952,
          lng: 43.59839
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Tbilisi"}
          icon={{
            url: "/src/icons/01d.svg",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
          position={{
            lat: 41.6935,
            lng: 44.8015
          }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0XNO0tPBzLZtOn4fKDWPeJ3q_2BoeQbo"
})(MapContainer)
