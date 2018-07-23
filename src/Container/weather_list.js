import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class WeatherList extends Component {

    renderTemp(cityData){
        return _.round(cityData.main.temp - 273) ;
    }

    renderWeather(cityData){
        return cityData.weather[0].main ;
    }
    renderDescription(cityData){
        return cityData.weather[0].description ;
    }
    renderHumidity(cityData){
        return cityData.main.humidity;
    }
    renderWindS(cityData){
        return cityData.wind.speed;
    }
    renderWindD(cityData){
        return cityData.wind.deg;
    }



     
    render() {
        return (
            <table>
             <thead><tr><th>{this.props.cityName}</th></tr></thead>
             <tbody>
                 <tr>
                     <td>
                        {this.props.weather.map(this.renderTemp)} <br/>
                        {this.props.weather.map(this.renderWeather)} <br/>
                        {this.props.weather.map(this.renderDescription)}
                     </td>   
                 </tr>
                 <tr>
                     <td>
                         Comfort Level    Humidity {this.props.weather.map(this.renderHumidity)}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Wind   Speed {this.props.weather.map(this.renderWindS)} Direction {this.props.weather.map(this.renderWindD)}
                     </td>
                 </tr>

             </tbody>
            </table>
            
        );
        
    }
}



function mapStateToProps (state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);