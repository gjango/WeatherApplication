import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


export class App extends Component {

  constructor(props){
    super(props);

    this.state = {city:'Choose a city to view the weather'};
    this.handleClick = this.handleClick.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  render() {
    return (
      <div>
        <div className="navbar" id="navbar">
          <nav className="navbar navbar-lg navbar-light bg-blue">
              <a className="navbar-brand" href="#"><img src="/src/icons/rainbow.png" width="40" height="40" className="d-inline-block align-top" alt=""/>
                Weather</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="#" onClick={this.handleClick} >Tbilisi</a>
                  <a className="nav-item nav-link" href="#" onClick={this.handleClick} >Kutaisi</a>
                  <a className="nav-item nav-link" href="#" onClick={this.handleClick} >Batumi</a>
                  <a className="nav-item nav-link" href="#" onClick={this.handleClick} >Zugdidi</a>
                </div>
              </div>
            </nav>
            <div className="container" >
              <h1 className="display-4" onClick={this.handleCityChange} > {this.state.city} </h1>
            </div>
            </div>
            

      </div>

      
    );
  }

  handleClick(event){
    this.setState({city: event.target.textContent});
  }

  handleCityChange(event){
    this.props.fetchWeather(this.state.city);
  }
  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(App);
