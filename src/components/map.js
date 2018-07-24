import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} 
            zoom={7}
            initialCenter={{
            lat: 41.6935,
            lng: 44.8015
          }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                icon={{
                    url: "/src/icons/01d.svg",
                    anchor: new google.maps.Point(32,32),
                    scaledSize: new google.maps.Size(64,64)}} />
 
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD0XNO0tPBzLZtOn4fKDWPeJ3q_2BoeQbo')
})(MapContainer)