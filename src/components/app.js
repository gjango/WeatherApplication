import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import WeatherList from '../Container/weather_list';
import {fetchForecast} from '../actions/forecast';
import ForecastList from '../Container/forecast_list';

export class App extends Component {

  constructor(props){
    super(props);

    this.state = {city:'Choose a city to view the weather'};
    this.handleClick = this.handleClick.bind(this);
  }

  

  
  render() {

    let cities = ['Tbilisi', 'Rustavi', 'Zugdidi', 'Kutaisi','Batumi','Gori','Poti','Mtskheta','Dusheti','Kobuleti'];
    

    return (
      <div >
        <div className="navbar" id="navbar">
          <nav className="navbar navbar-lg navbar-light bg-blue">
              <a className="navbar-brand" href="#"><img src="/src/icons/rainbow.png" width="40" height="40" className="d-inline-block align-top" alt=""/>
                Weather</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  {cities.map(city => <a className="nav-item nav-link" href="#" onClick={this.handleClick} key={_.random(0,999999)}>{city}</a>)}
                </div>
              </div>
            </nav>
            <div className="showdata">
              <WeatherList cityName = {this.state.city} /> 
              {/* <ForecastList cityName = {this.state.city} /> */}
              <ForecastList  />
            </div>
            </div>
            
            

      </div>

      
    );
  }
  

  handleClick(event){
    this.setState({city: event.target.textContent});
  }

  componentDidUpdate(){

      this.props.fetchWeather(this.state.city);
      this.props.fetchForecast(this.state.city);


  }


 
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather , fetchForecast}, dispatch);
}

export default connect(null,mapDispatchToProps)(App);
