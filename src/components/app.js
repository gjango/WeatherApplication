import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchWeather } from "../actions/index"
import Weather from "../Container/Weather"
import { fetchForecast } from "../actions/forecast"
import { fetchDaily } from "../actions/daily"
import DailyList from "../Container/DailyList"
import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"
import { slide as Menu } from "react-burger-menu"
import { cities } from "../utils/consts"

class MenuWrap extends Component {
  state = {
    hidden: false
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged =
      this.props.children.props.right !== nextProps.children.props.right

    if (sideChanged) {
      this.setState({ hidden: true })

      setTimeout(() => {
        this.setState({ hidden: false })
      }, this.props.wait)
    }
  }

  render() {
    let style
    if (this.state.hidden) style = { display: "none" }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    )
  }
}

export class App extends Component {
  state = {
    city: "",
    currentMenu: "slide",
    side: "left"
  }

  componentDidUpdate() {
    this.props.fetchWeather(this.state.city)
    this.props.fetchForecast(this.state.city)
    this.props.fetchDaily(this.state.city)
  }

  render() {
    return (
      <Wrapper>
        <MenuWrap wait={20}>
          <Menu
            id={this.state.currentMenu}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            {cities.map(x => x.name).map(city => (
              <City
                href="#"
                key={`city-${city}`}
                onClick={() => this.setState({ city })}
                selected={this.state.city === city}
              >
                {city}
              </City>
            ))}
          </Menu>
        </MenuWrap>

        {!this.state.city ? (
          <Empty>
            <h1>Choose a city to view the weather</h1>
          </Empty>
        ) : (
          <Weather cityName={this.state.city} />
        )}
        <NavLink to="/weathermap">
          <button type="button" className="btn btn-outline-info  float-right">
            <LocationImg src="/src/icons/location.png" />
          </button>
        </NavLink>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`

const City = styled.a`
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: #bfad2e;
    `};

  :hover {
    background-color: #bfad2e;
    text-decoration: none;
  }
`

const LocationImg = styled.img`
  width: 30px;
`

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWeather, fetchForecast, fetchDaily },
    dispatch
  )
}

export default connect(
  null,
  mapDispatchToProps
)(App)
