import React, { Component } from "react"
import { connect } from "react-redux"
import _ from "lodash"

class ForecastList extends Component {
  renderForecast(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp)
    const date = cityData.list.map(weather => weather.dt_txt)
    // // console.log(date)
    // console.log(temps)
    return temps.map(temp => (
      <div className="card--content" key={_.random(0, 999999)}>
        {temp}
      </div>
    ))
  }

  render() {
    console.log(this)
    return (
      <section className="card">
        {this.props.forecast.map(this.renderForecast)}
      </section>
    )
  }
}

function mapStateToProps(state) {
  return { forecast: state.forecast }
}

export default connect(mapStateToProps)(ForecastList)
