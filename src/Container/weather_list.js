import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData){
        return cityData.main.temp ;
    }

     
    render() {
        return (
            <table>
             <thead><tr><th>{this.props.cityName}</th></tr></thead>
             <tbody>
                 <tr><td>{this.props.weather.map(this.renderWeather)}</td></tr>
                 <tr><td> sadasd    asdassssss asddddddd </td></tr>

             </tbody>
            </table>
            
        );
        
    }
}



function mapStateToProps (state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);