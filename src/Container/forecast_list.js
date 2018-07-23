import React, {Component} from 'react';
import {connect} from 'react-redux';

class ForecastList extends Component {

    renderForecast(cityData){
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        // return (<td> {temps} </td>)
        
        return (temps.map( temp => <div className="card--content" key={_.random(0,999999)}>{temp}</div>));
    }

    render(){
        return (
            <section className="card">
                
                {this.props.forecast.map(this.renderForecast)}
            </section>
         );
    }
}

function mapStateToProps (state) {
    return {forecast: state.forecast};
}

export default connect(mapStateToProps)(ForecastList);