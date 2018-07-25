import React, {Component} from 'react';
import {connect} from 'react-redux';

class DailyList extends Component {

    renderDaily(cityData){
        const temps= cityData.list.map(weather => weather.temp.day);
        return (temps.map( temp => <tr  key={_.random(0,999999)}><td>{temp}</td></tr>));
    }

    render(){
        return (
            <table>
                <thead><tr><th>7 Day Forecast</th></tr></thead>
                <tbody> 
                   {this.props.daily.map(this.renderDaily)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps (state) {
    return {daily: state.daily};
}

export default connect(mapStateToProps)(DailyList);